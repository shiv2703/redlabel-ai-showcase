import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  type: 'sphere' | 'box' | 'torus';
  color: string;
  speed?: number;
}

const FloatingObject = ({ position, type, color, speed = 1 }: FloatingObjectProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (type) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.5]} position={position} />;
      case 'box':
        return <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.5]} position={position} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        metalness={0.7}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

interface Scene3DProps {
  objects?: FloatingObjectProps[];
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

const Scene3D = ({ 
  objects = [
    { position: [2, 0, -1], type: 'sphere', color: '#dc2626', speed: 0.8 },
    { position: [-2, 1, -2], type: 'box', color: '#b91c1c', speed: 1.2 },
    { position: [0, -1, -3], type: 'torus', color: '#f87171', speed: 0.6 },
  ], 
  cameraPosition = [0, 0, 5],
  enableControls = true 
}: Scene3DProps) => {
  return (
    <div className="absolute inset-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: cameraPosition, fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#dc2626"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.6}
          color="#f87171"
        />
        
        {/* 3D Objects */}
        {objects.map((obj, index) => (
          <FloatingObject key={index} {...obj} />
        ))}
        
        {/* Interactive Controls */}
        {enableControls && (
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;