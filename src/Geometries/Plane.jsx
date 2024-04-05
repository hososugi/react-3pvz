import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export function Plane({position=[0, 0, 0], rotation=[0, 0, 0], size=[1, 1, 1], color='white'}) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => {});

    return (
        <mesh 
            position={position}
            rotation={rotation}
            ref={meshRef}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>

        <planeGeometry args={[1, 2]} />
        <meshStandardMaterial color={hovered ? 'yellow' : 'green'} />
        </mesh>
    );
}

export default Plane