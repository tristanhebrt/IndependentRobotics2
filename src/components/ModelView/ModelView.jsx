import styles from "./ModelView.module.css"

import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, ContactShadows, useGLTF, OrbitControls } from '@react-three/drei'

function Model({url, ...props}) {
    const { nodes, materials } = useGLTF(url)
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

export default function ModelView({modelUrl=''}) {
    return (
        <div className={styles.CanvasContainer}>
            <Canvas camera={{ position: [0, 0, -5], fov: 55 }}>
            <ambientLight intensity={5} />
            <Suspense fallback={<Html><div className={styles.suspenseContainer}>Loading</div></Html>}>
                <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                    <Model url={modelUrl}/>
                </group>
                <Environment preset="warehouse" />
            </Suspense>
            <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
            <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </div>
    )
}