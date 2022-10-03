import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro';
import { Info } from './components/Info';
import { Navigation } from './components/Navigation';
import { Scene } from './components/Scene';
import { content } from './util/constants';
import { BackButton, HRDiagram } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import hrDiagramImg from './assets/hr-diagram.jpg';

function App() {
    const [variableType, setVariableType] = useState('pulsating');
    const [onMenu, setOnMenu] = useState(true);
    const [diagramScreen, setDiagramScreen] = useState(false);

    function toggleMenu(chosenType) {
        setVariableType(chosenType);
        setDiagramScreen(false);
        setOnMenu((prev) => !prev);
    }

    function toggleDiagramScreen() {
        setVariableType('hr-diagram');
        setOnMenu((prev) => !prev);
        setDiagramScreen((prev) => !prev);
    }

    function returnToMenu() {
        setOnMenu(true);
        setDiagramScreen(false);
    }

    return (
        <>
            {onMenu ? (
                <Intro
                    toggleMenu={toggleMenu}
                    toggleDiagramScreen={toggleDiagramScreen}
                />
            ) : (
                <>
                    <BackButton onClick={returnToMenu}>
                        <FaArrowLeft></FaArrowLeft>
                    </BackButton>
                    {!diagramScreen && (
                        <Navigation
                            setVariableType={setVariableType}
                        ></Navigation>
                    )}
                    <Info
                        content={content.find(
                            (item) => item.id === variableType
                        )}
                    ></Info>
                    {diagramScreen && (
                        <HRDiagram src={hrDiagramImg}></HRDiagram>
                    )}
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
