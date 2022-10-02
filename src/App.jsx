import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro';
import { Info } from './components/Info';
import { Navigation } from './components/Navigation';
import { Scene } from './components/Scene';
import { content } from './util/constants';
import { BackButton } from './styles';
import { FaArrowLeft } from 'react-icons/fa';

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
                    <BackButton onClick={() => setOnMenu((prev) => !prev)}>
                        <FaArrowLeft></FaArrowLeft>
                    </BackButton>
                    <Navigation setVariableType={setVariableType}></Navigation>
                    <Info
                        content={content.find(
                            (item) => item.id === variableType
                        )}
                    ></Info>
                    <Canvas
                        camera={{ fov: 75, position: [0, 0, 4] }}
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
