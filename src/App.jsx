import { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Info } from './components/Info';
import './styles.css';
import { TextureLoader } from 'three';
import sunImage from './assets/sun-texture.png';

// import { Physics, usePlane, useBox } from "@react-three/cannon";

const pulsatingTextExample =
    "Pulsating variables are stars showing periodic expansion and contraction of their surface layers. The pulsations may be radial or nonradial. A radially pulsating star remains spherical in shape, while in the case of nonradial pulsations the star's shape periodically deviates from a sphere, and even neighboring zones of its surface may have opposite pulsation phases.";

function Star({ group, pos }) {
    // const [ref] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    const colorMap = useLoader(TextureLoader, sunImage);

    return (
        <group ref={group}>
            <mesh position={[pos, 0, 0]}>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial
                    map={colorMap}
                    attach="material"
                    // color="orange"
                />
            </mesh>
        </group>
    );
}

function BinaryStar({ group, pos, pos2 }) {
    // const [ref] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    const colorMap = useLoader(TextureLoader, sunImage);

    return (
        // <mesh position={[-2.5, 0.5, 0]}>
        <group ref={group}>
            <mesh position={[pos, 0, 0]}>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial
                    map={colorMap}
                    attach="material"
                    // color="orange"
                />
            </mesh>
            <mesh position={[pos2, 0, 0]}>
                <sphereBufferGeometry attach="geometry" />
                <meshStandardMaterial
                    map={colorMap}
                    attach="material"
                    // color="orange"
                />
            </mesh>
        </group>
    );
}

function Scene({ binaryStar }) {
    let brightness = 0.8;
    const light = useRef();
    const binary = useRef();
    // const simple = useRef();

    useFrame(() => {
        // let lightChange = light.current.intensity >= 1 ? -0.01 : 0.01;
        // light.current.intensity += 0.1;
        // console.log(light.current.intensity);
        binary.current.rotation.z += 0.05;
    });

    return (
        <>
            <OrbitControls />
            <Stars />
            <ambientLight ref={light} intensity={brightness} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            {binaryStar ? (
                <BinaryStar group={binary} pos={-2.5} pos2={0} />
            ) : (
                <Star group={binary} pos={0}></Star>
            )}
        </>
    );
}

function App() {
    const [binaryStar, setBinaryStar] = useState(false);

    return (
        <>
            <Info
                title="Rotating variable star"
                text={pulsatingTextExample}
            ></Info>
            <button onClick={() => setBinaryStar((prev) => !prev)}>
                Trocar
            </button>
            <Canvas camera={{ fov: 75, position: [0, 5, 5] }}>
                <Scene binaryStar={binaryStar}></Scene>
            </Canvas>
        </>
    );
}

export default App;
