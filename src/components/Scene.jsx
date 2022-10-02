import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Star, BinaryStar, CataclysmicStar } from './Mesh/Stars';

export function Scene({ variableType }) {
    let brightness = 0.8;
    const light = useRef();
    const groupRef = useRef();
    const centerStar = useRef();
    const otherStar = useRef();
    const massTransfer = useRef();

    let lightChange = 0.05;
    const [lowerBrightness, upperBrightness] = [0.3, 2];
    const brightnessStep = 0.03;

    let scaleChange = 0.2;
    const [lowerScale, upperScale] = [0.95, 1.05];
    const scaleStep = 0.002;

    const allowRotation = ['pulsating', 'rotating', 'binary'];
    const allowIndividualRotation = ['binary', 'cataclysmic'];
    const allowExpansion = ['pulsating'];

    useFrame(() => {
        // Setting brightness cycle
        if (!light.current) return;
        if (light.current.intensity < lowerBrightness)
            lightChange = brightnessStep;
        if (light.current.intensity > upperBrightness)
            lightChange = -brightnessStep;
        light.current.intensity += lightChange;

        // Setting expansion and compression cycle
        if (allowExpansion.includes(variableType)) {
            if (!groupRef.current) return;
            let previousScale = groupRef.current.scale.x ?? 1;
            if (previousScale < lowerScale) scaleChange = scaleStep;
            if (previousScale > upperScale) scaleChange = -scaleStep;
            const newScale = previousScale + scaleChange;
            groupRef.current.scale.set(newScale, newScale, newScale);
        }

        if (allowRotation.includes(variableType)) {
            groupRef.current.rotation.y += -0.025;
        }

        if (allowIndividualRotation.includes(variableType)) {
            if (!centerStar.current) return;
            centerStar.current.rotation.y += 0.02;
            otherStar.current.rotation.y += -0.05;
        }

        if (variableType === 'cataclysmic') {
            // massTransfer.Object3D.rotateOnAxis('x', 2);
        }
    });

    return (
        <>
            <OrbitControls />
            <Stars />
            <ambientLight ref={light} intensity={brightness} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            {variableType === 'pulsating' && (
                <Star groupRef={groupRef} pos={-1.5} />
            )}
            {variableType === 'binary' && (
                <BinaryStar
                    groupRef={groupRef}
                    centerStar={centerStar}
                    otherStar={otherStar}
                    pos={0}
                    pos2={-3}
                />
            )}
            {variableType === 'cataclysmic' && (
                <CataclysmicStar
                    groupRef={groupRef}
                    centerStar={centerStar}
                    otherStar={otherStar}
                    massTransfer={massTransfer}
                    pos={-1.5}
                    pos2={-4.5}
                />
            )}
        </>
    );
}
