import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingShapes = () => {
  const cube1Ref = useRef<Mesh>(null);
  const cube2Ref = useRef<Mesh>(null);
  const sphere1Ref = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);
  const torus1Ref = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x = time * 0.3;
      cube1Ref.current.rotation.y = time * 0.2;
      cube1Ref.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x = time * 0.2;
      cube2Ref.current.rotation.z = time * 0.3;
      cube2Ref.current.position.y = Math.cos(time * 0.8) * 0.3;
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.sin(time * 0.5) * 2;
      sphere1Ref.current.position.y = Math.cos(time * 0.3) * 1;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.cos(time * 0.7) * 1.5;
      sphere2Ref.current.position.z = Math.sin(time * 0.4) * 1;
    }
    
    if (torus1Ref.current) {
      torus1Ref.current.rotation.x = time * 0.4;
      torus1Ref.current.rotation.y = time * 0.3;
      torus1Ref.current.position.y = Math.sin(time * 1.2) * 0.8;
    }
  });

  return (
    <>
      {/* Floating Cubes */}
      <mesh ref={cube1Ref} position={[3, 0, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#dc2626" 
          transparent 
          opacity={0.3}
          wireframe={false}
        />
      </mesh>
      
      <mesh ref={cube2Ref} position={[-4, 2, -1]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color="#b91c1c" 
          transparent 
          opacity={0.4}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Floating Spheres */}
      <mesh ref={sphere1Ref} position={[2, -1, -3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#dc2626" 
          transparent 
          opacity={0.2}
          emissive="#dc2626"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh ref={sphere2Ref} position={[-2, -2, -2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#f87171" 
          transparent 
          opacity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Floating Torus */}
      <mesh ref={torus1Ref} position={[0, 1, -4]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#dc2626" 
          transparent 
          opacity={0.2}
          wireframe={true}
        />
      </mesh>
    </>
  );
};

export default FloatingShapes;