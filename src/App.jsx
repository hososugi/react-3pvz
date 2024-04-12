import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useControls } from "leva"
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, SoftShadows, Sky } from '@react-three/drei'
import './App.css'
import { Box } from './Geometries/Box.jsx'
import { Plane } from './Geometries/Plane.jsx'


function App() {
  const {shadowEnabled, ...shadowConfig} = useControls({
    enabled: true,
    size: { value: 25, min: 0, max: 100 },
    focus: { value: 0, min: 0, max: 2 },
    samples: { value: 10, min: 1, max: 20, step: 1 }
  });

  return (
    <div id="canvas-container">
      <Canvas 
        camera={{ fov: 75, position: [0, 10, 10]}} 
        rotation={[0,0,0]}
        shadows="true">
        
        <OrbitControls />
        {shadowEnabled && <SoftShadows {...shadowConfig} />}
        <fog attach="fog" args={["white", 0, 40]} />
        <Sky castShadow={true} distance={40} sunPosition={[1, 1, 0]} />
        <ambientLight intensity={Math.PI / 2} />
        <directionalLight 
          position={[0, 3, 0]}
          intensity={1.5}
          castShadow={true}
          shadow-camera-near={0.1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10} />
        {/*
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        */}
        
        <Box position={[-1.2, 2, 0]} color={"blue"} />
        <Box position={[1.2, 2, 0]} />

        <Plane rotation={[-90, 0, 0]} size={[10,10]} />
        <Stats />
      </Canvas>
    </div>
  )
}

export default App
