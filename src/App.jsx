import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro';
import { Info } from './components/Info';
import { Navigation } from './components/Navigation';
import { Scene } from './components/Scene';

// import { Physics, usePlane, useBox } from "@react-three/cannon";

const pulsatingTextExample =
    "Pulsating variables are stars showing periodic expansion and contraction of their surface layers. The pulsations may be radial or nonradial. A radially pulsating star remains spherical in shape, while in the case of nonradial pulsations the star's shape periodically deviates from a sphere, and even neighboring zones of its surface may have opposite pulsation phases.";

function App() {
    const [variableType, setVariableType] = useState('pulsating');
    const [onMenu, setOnMenu] = useState(true);

    function toggleMenu(chosenType) {
        console.log(chosenType);
        setVariableType(chosenType);
        setOnMenu((prev) => !prev);
    }

    return (
        <>
            {onMenu ? (
                <Intro toggleMenu={toggleMenu} />
            ) : (
                <>
                    <Navigation setVariableType={setVariableType}></Navigation>
                    <Info
                        title="Rotating variable star"
                        text={pulsatingTextExample}
                    ></Info>
                    <Canvas
                        camera={{ fov: 75, position: [0, 2, 4] }}
                        style={{
                            width: '95vw',
                            height: '95vh',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Scene variableType={variableType}></Scene>
                    </Canvas>
                </>
            )}
        </>
    );
}

export default App;
