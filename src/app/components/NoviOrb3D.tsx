"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.04;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={1.1}>
      <Sphere ref={meshRef} args={[1.35, 128, 128]}>
        <MeshDistortMaterial
          color="#6c5ce7"
          attach="material"
          distort={0.42}
          speed={1.7}
          roughness={0.15}
          metalness={0.25}
          emissive="#6c5ce7"
          emissiveIntensity={0.22}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({
  radius,
  color,
  speed,
  tilt,
}: {
  radius: number;
  color: string;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += speed * delta;
  });
  return (
    <Torus
      ref={ref}
      args={[radius, 0.008, 16, 120]}
      rotation={[Math.PI / 2.4 + tilt, 0, 0]}
    >
      <meshBasicMaterial color={color} transparent opacity={0.32} />
    </Torus>
  );
}

export default function NoviOrb3D({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.8]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.1} color="#a29bfe" />
        <pointLight position={[-3, -2, 2]} intensity={0.8} color="#00cec9" />
        <Suspense fallback={null}>
          <Blob />
          <OrbitRing radius={1.9} color="#6c5ce7" speed={0.25} tilt={0} />
          <OrbitRing radius={2.25} color="#00cec9" speed={-0.18} tilt={0.25} />
        </Suspense>
      </Canvas>
    </div>
  );
}