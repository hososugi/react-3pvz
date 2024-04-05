import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export function Box({position=[1, 1, 1], rotation=[0, 0, 0], size=[1, 1, 1], color='white'}) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
        <mesh 
            position={position}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>

        <boxGeometry args={size} />
        <meshStandardMaterial color={hovered ? 'hotpink' : color} />
        </mesh>
    );
}

export default Box