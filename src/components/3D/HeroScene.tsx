import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingShapes from './FloatingShapes';

const HeroScene = () => {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            color="#dc2626"
          />
          <pointLight 
            position={[-10, -10, -5]} 
            intensity={0.5}
            color="#f87171"
          />
          
          {/* 3D Elements */}
          <FloatingShapes />
          
          {/* Interactive Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;