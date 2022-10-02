import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Star, BinaryStar, CataclysmicStar, Eruptive } from './Mesh/Stars';
import {
    brightnessSettings,
    expansionSettings,
    eruptionSettings,
    canAnimate,
} from '../util/constants';

const { lowerBrightness, upperBrightness, brightnessStep } = brightnessSettings;

let { lightChange } = brightnessSettings;

const { lowerScale, upperScale, scaleStep } = expansionSettings;

let { scaleChange } = expansionSettings;

const { lowerErupt, upperErupt, eruptStep } = eruptionSettings;

let { eruptChange } = eruptionSettings;

const { canRotate, canRotateIndividually, canExpand, canErupt } = canAnimate;

export function Scene({ variableType }) {
    let brightness = 0.8;
    const light = useRef();
    const groupRef = useRef();
    const centerStar = useRef();
    const otherStar = useRef();
    const massTransfer = useRef();

    useFrame(() => {
        // Setting brightness cycle
        if (!light.current) return;
        if (light.current.intensity < lowerBrightness)
            lightChange = brightnessStep;
        if (light.current.intensity > upperBrightness)
            lightChange = -brightnessStep;
        light.current.intensity += lightChange;

        // Setting expansion and compression cycle
        if (canExpand.includes(variableType)) {
            if (!groupRef.current) return;
            let previousScale = groupRef.current.scale.x ?? 1;
            if (previousScale < lowerScale) scaleChange = scaleStep;
            if (previousScale > upperScale) scaleChange = -scaleStep;
            const newScale = previousScale + scaleChange;
            groupRef.current.scale.set(newScale, newScale, newScale);
        }

        if (canRotate.includes(variableType)) {
            if (!groupRef.current) return;
            groupRef.current.rotation.y += -0.025;
        }

        if (canRotateIndividually.includes(variableType)) {
            if (!centerStar.current) return;
            centerStar.current.rotation.y += 0.02;
            otherStar.current.rotation.y += -0.05;
        }

        if (canErupt.includes(variableType)) {
            if (!centerStar.current) return;
            centerStar.current.rotation.y += 0.02;
            otherStar.current.rotation.z += -0.02;
            otherStar.current.rotation.x += -0.05;

            if (!otherStar.current) return;
            let previousScale = otherStar.current.scale.x ?? 1;
            if (previousScale < lowerErupt) eruptChange = eruptStep;
            if (previousScale > upperErupt) eruptChange = -eruptStep;
            const newScale = previousScale + eruptChange;
            otherStar.current.scale.set(newScale, 0.3, 0.3);
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
            {variableType === 'rotating' && (
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
                    pos={-0.8}
                    pos2={-3.8}
                />
            )}
            {variableType === 'eruptive' && (
                <Eruptive
                    groupRef={groupRef}
                    centerStar={centerStar}
                    eruption={otherStar}
                    pos={-1.5}
                />
            )}
        </>
    );
}
