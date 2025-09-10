import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingElements = () => {
  const element1Ref = useRef<Mesh>(null);
  const element2Ref = useRef<Mesh>(null);
  const element3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (element1Ref.current) {
      element1Ref.current.rotation.x = time * 0.1;
      element1Ref.current.rotation.y = time * 0.15;
      element1Ref.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    if (element2Ref.current) {
      element2Ref.current.rotation.z = time * 0.2;
      element2Ref.current.position.x = Math.cos(time * 0.3) * 2;
    }
    
    if (element3Ref.current) {
      element3Ref.current.rotation.y = time * 0.25;
      element3Ref.current.position.z = Math.sin(time * 0.4) * 1;
    }
  });

  return (
    <>
      <mesh ref={element1Ref} position={[3, 0, -3]}>
        <octahedronGeometry args={[0.5]} />
        <meshStandardMaterial 
          color="#dc2626" 
          transparent 
          opacity={0.15}
          wireframe={true}
        />
      </mesh>
      
      <mesh ref={element2Ref} position={[-3, 1, -2]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshStandardMaterial 
          color="#b91c1c" 
          transparent 
          opacity={0.2}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      
      <mesh ref={element3Ref} position={[0, -1, -4]}>
        <dodecahedronGeometry args={[0.3]} />
        <meshStandardMaterial 
          color="#f87171" 
          transparent 
          opacity={0.1}
          emissive="#dc2626"
          emissiveIntensity={0.05}
        />
      </mesh>
    </>
  );
};

const AboutBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.5}
          color="#dc2626"
        />
        
        <FloatingElements />
      </Canvas>
    </div>
  );
};

export default AboutBackground;