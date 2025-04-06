import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [colorMap, bumpMap] = useLoader(THREE.TextureLoader, [
    '/images/earth-texture.jpg',
    '/images/earth-bump.jpg'
  ], (loader) => {
    console.log('Textures loaded:', loader);
  }, (error) => {
    console.error('Error loading textures:', error);
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.5}
          roughness={0.8}
          metalness={0}
        />
      </Sphere>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} />
      <Environment preset="sunset" />
    </group>
  );
};

export default Globe; 