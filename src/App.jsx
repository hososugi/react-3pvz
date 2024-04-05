import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import './App.css'
import { Box } from './Geometries/Box.jsx'
import { Plane } from './Geometries/Plane.jsx'

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 75, position: [0, 0, 10]}} rotation={[0,0,0]}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        
        <Box position={[-1.2, 0, 0]} color={"blue"} />
        <Box position={[1.2, 0, 0]} />

        <Plane rotation={[-90, 0, 0]} size={[5,10]} />

        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  )
}

export default App
