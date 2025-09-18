// src/components/Three/DigitalInnovation.tsx
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function InnovationModel() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/gltf/digi/scitab.glb`
  ) as { scene: THREE.Object3D };

  // Scale + position adjustments
  scene.scale.set(1.5, 1.5, 1.5);
  scene.position.set(0, -0.1, 0); // lower the model
  scene.rotation.y = Math.PI; // face forward

  return <primitive object={scene} />;
}

function FloatingInnovationInner() {
  const modelRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (modelRef.current) {
      // Floating effect
      modelRef.current.position.y = -1.2 + Math.sin(t * 0.8) * 0.3;

      // Continuous rotation
      modelRef.current.rotation.y += 0.003;

      // Hover zoom
      const targetScale = hovered ? 1.2 : 1;
      modelRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.07
      );
    }
  });

  return (
    <group
      ref={modelRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      <InnovationModel />
    </group>
  );
}

export default function DigitalInnovation() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <FloatingInnovationInner />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
