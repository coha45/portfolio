import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Globe from './Globe';

const GlobeContainer = () => {
  return (
    <div className="w-full h-[80vh] min-h-[600px] max-[700px]:hidden m-10 mb-0">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
        />
        <Globe />
      </Canvas>
    </div>
  );
};

export default GlobeContainer; 