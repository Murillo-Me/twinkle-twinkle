import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Menu } from './Menu';

export function Intro({ toggleMenu, toggleDiagramScreen }) {
    return (
        <>
            <Menu
                toggleMenu={toggleMenu}
                toggleDiagramScreen={toggleDiagramScreen}
            ></Menu>
            <Canvas
                style={{ width: '95vw', height: '95vh', margin: 0, padding: 0 }}
            >
                <Stars />
            </Canvas>
        </>
    );
}
