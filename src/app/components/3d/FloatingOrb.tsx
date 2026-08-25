'use client'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <icosahedronGeometry args={[1.2, 2]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#4f46e5"
          emissiveIntensity={0.3}
          distort={hovered ? 0.6 : 0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingOrb3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Orb />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}