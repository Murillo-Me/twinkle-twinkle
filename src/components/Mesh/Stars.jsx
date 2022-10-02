import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import starImage1 from '../../assets/sun-texture.png';
import starImage2 from '../../assets/star2.jpg';

export function Star({ groupRef, pos }) {
    const colorMap = useLoader(TextureLoader, starImage1);

    return (
        <mesh position={[pos, 0.5, 0]} ref={groupRef}>
            <sphereBufferGeometry />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
}

export function BinaryStar({ groupRef, centerStar, otherStar, pos, pos2 }) {
    const colorMap = useLoader(TextureLoader, starImage1);
    const colorMap2 = useLoader(TextureLoader, starImage2);

    return (
        <group ref={groupRef}>
            <mesh position={[pos, 0, 0]} ref={centerStar}>
                <sphereBufferGeometry />
                <meshStandardMaterial map={colorMap} />
            </mesh>
            <mesh
                position={[pos2, 0, 0]}
                ref={otherStar}
                scale={[0.7, 0.7, 0.7]}
            >
                <sphereBufferGeometry />
                <meshStandardMaterial map={colorMap2} />
            </mesh>
        </group>
    );
}

export function CataclysmicStar({
    groupRef,
    centerStar,
    otherStar,
    massTransfer,
    pos,
    pos2,
}) {
    const colorMap = useLoader(TextureLoader, starImage1);
    const colorMap2 = useLoader(TextureLoader, starImage2);

    return (
        <group ref={groupRef} rotation={[Math.PI / 6, 0, 0]}>
            <mesh
                position={[pos, 0, 0]}
                ref={centerStar}
                scale={[1.2, 1.2, 1.2]}
            >
                <sphereBufferGeometry />
                <meshStandardMaterial map={colorMap} />
            </mesh>
            <mesh position={[pos2, 0, 0]} ref={otherStar} scale={[1, 0.3, 1]}>
                <sphereBufferGeometry />
                <meshLambertMaterial map={colorMap2} color="orange" />
            </mesh>
            <mesh
                position={[-2.3, 0, 0.2]}
                ref={massTransfer}
                rotation={[Math.PI / 2, 0, (Math.PI / 2) * 0.65]}
                scale={[0.3, 2, 0.3]}
            >
                <coneGeometry />
                <meshStandardMaterial map={colorMap} color="red" />
            </mesh>
        </group>
    );
}

export function Eruptive({ groupRef, centerStar, eruption, pos }) {
    const colorMap = useLoader(TextureLoader, starImage1);

    return (
        <group ref={groupRef}>
            <mesh position={[pos, 0, 0]} ref={centerStar}>
                <sphereBufferGeometry />
                <meshStandardMaterial map={colorMap} />
            </mesh>
            <mesh position={[pos, 0, 0]} ref={eruption} scale={[1.2, 0.6, 0.6]}>
                <sphereBufferGeometry />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </group>
    );
}
