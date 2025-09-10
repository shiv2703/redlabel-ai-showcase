import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface ServiceIcon3DProps {
  type: 'web' | 'ai';
}

const WebIcon = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2, 0.8, 0.1]} />
      <meshStandardMaterial 
        color="#dc2626" 
        metalness={0.7}
        roughness={0.3}
      />
      {/* Screen effect */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[1, 0.6]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#dc2626"
          emissiveIntensity={0.1}
        />
      </mesh>
    </mesh>
  );
};

const AIIcon = () => {
  const groupRef = useRef<Group>(null);
  const innerRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.5;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = time * 0.3;
      innerRef.current.rotation.z = time * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#dc2626" 
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#dc2626"
          metalness={0.8}
          roughness={0.2}
          emissive="#dc2626"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

const ServiceIcon3D = ({ type }: ServiceIcon3DProps) => {
  return (
    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-background to-card border border-border">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} color="#dc2626" />
        
        {type === 'web' ? <WebIcon /> : <AIIcon />}
      </Canvas>
    </div>
  );
};

export default ServiceIcon3D;