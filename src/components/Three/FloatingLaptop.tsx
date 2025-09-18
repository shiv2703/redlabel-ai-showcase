// src/components/Three/FloatingLaptop.tsx
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function LaptopModel() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/gltf/webdev/lap.glb`
  ) as { scene: THREE.Object3D };

  // Initial orientation and scale
  scene.scale.set(0.5, 0.5, 0.5);
  scene.rotation.y = Math.PI; // face forward

  return <primitive object={scene} />;
}

function FloatingLaptopInner() {
  const laptopRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (laptopRef.current) {
      // Floating motion
      laptopRef.current.position.y = Math.sin(t * 1.2) * 0.4;

      // Continuous rotation
      laptopRef.current.rotation.y += 0.01;

      // Smooth scaling on hover
      const targetScale = hovered ? 2.5 : 2;
      laptopRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1 // transition speed
      );
    }
  });

  return (
    <group
      ref={laptopRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <LaptopModel />
    </group>
  );
}

export default function FloatingLaptop() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Laptop */}
      <Suspense fallback={null}>
        <FloatingLaptopInner />
      </Suspense>

      {/* Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
