import React, { useEffect, useRef } from 'react';
import styles from "./ThreeDContainer.module.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import robotModel from '../assets/independenceRoboticsRobot.glb'; // Correctly import the model

function ThreeDContainer() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, 500 / 900, 0.1, 1000); // Adjust aspect ratio to match container

        // Enable transparency by setting alpha: true
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(600, 900); // Match renderer size to container size
        mountRef.current.appendChild(renderer.domElement);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Enable damping
        controls.dampingFactor = 0.25;

        camera.position.set(0, 0.5, 3); // Adjust camera position for smaller container
        controls.update();

        // Load the GLTF model
        const loader = new GLTFLoader();
        loader.load(
            robotModel, // Use the imported model
            (gltf) => {
                // Scale the model here
                gltf.scene.scale.set(1.5, 1.5, 1.5);
                gltf.scene.rotateY(-0.5);
                
                // Change the model's material color to white
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        // Set the material color to white
                        if (child.material.isMeshStandardMaterial) {
                            child.material.color.set(0xffffff); // Set the material color to white
                            child.material.metalness = 0; // Set metalness to 0
                            child.material.roughness = 1; // Set roughness to 1 for a matte finish
                        } else if (child.material.isMeshPhongMaterial) {
                            child.material.color.set(0xffffff); // Set the material color to white
                            child.material.shininess = 0; // Set shininess to 0 for a matte finish
                        }
                        // Optionally remove any texture maps
                        child.material.map = null; // Remove any diffuse texture
                        child.material.emissiveMap = null; // Remove any emissive texture
                        child.material.normalMap = null; // Remove any normal texture
                    }
                });

                scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the GLTF model:', error);
            }
        );

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping = true
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            controls.dispose();
            renderer.dispose();
        };
    }, []);

    return <div className={styles.threeDContainer} ref={mountRef} />;
}

export default ThreeDContainer;
