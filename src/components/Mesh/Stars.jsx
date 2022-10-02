import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import sunImage from '../../assets/sun-texture.png';
import transferImage from '../../assets/WaterDropletsMixedBubbled001_COL_1K.jpg';

export function Star({ groupRef, pos }) {
    const colorMap = useLoader(TextureLoader, sunImage);

    return (
        <mesh position={[pos, 0.5, 0]} ref={groupRef}>
            <sphereBufferGeometry />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
}

export function BinaryStar({ groupRef, centerStar, otherStar, pos, pos2 }) {
    const colorMap = useLoader(TextureLoader, sunImage);

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
                <meshStandardMaterial map={colorMap} />
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
    const colorMap = useLoader(TextureLoader, sunImage);
    const transferMap = useLoader(TextureLoader, transferImage);

    return (
        <group ref={groupRef}>
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
                <meshLambertMaterial map={colorMap} color="orange" />
            </mesh>
            <mesh
                position={[-3, 0, 0.2]}
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
