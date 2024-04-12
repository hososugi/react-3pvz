import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export function Box({position=[1, 1, 1], rotation=[0, 0, 0], size=[1, 1, 1], color='white'}) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [width, height, depth] = size;

    useFrame((state, delta) => animation(state, delta, meshRef));

    return (
        <mesh 
            position={position}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            castShadow={true}>

        <boxGeometry args={size} />
        <meshStandardMaterial color={hovered ? 'hotpink' : color} />
        </mesh>
    );
}

function animation(state, delta, meshRef) {
    meshRef.current.rotation.x += delta;
}

export default Box