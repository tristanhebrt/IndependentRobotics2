import styles from "./ModelView.module.css"

import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Environment, ContactShadows, useGLTF, OrbitControls } from '@react-three/drei'

function Model({ url, ...props }) {
  const { nodes, materials } = useGLTF(url);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['pretty_assembly_-_pretty_arm-1'].geometry}
        material={materials['Plastic White 11']}
        position={[0, -1.2, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 0.12]}
        scale={0.004}
      />
    </group>
  )
}

export default function ModelView({ modelUrl = '' }) {
  const containerRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle cursor styles on container hover
  const handleMouseEnter = () => {
    document.body.style.cursor = 'grab'; // Change cursor to grab
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = isDragging ? 'grabbing' : 'auto'; // Reset cursor based on dragging state
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.cursor = 'grabbing'; // Change cursor to grabbing
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'grab'; // Change back to grab
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default mouse actions
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed if needed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default touch actions
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed if needed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={styles.CanvasContainer}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <Canvas camera={{ position: [0, 0, -5], fov: 55 }}>
        <ambientLight intensity={5} />
        <Suspense fallback={<Html><div className={styles.suspenseContainer}>Loading</div></Html>}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <Model url={modelUrl} />
          </group>
          <Environment preset="warehouse" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 2.2} 
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
