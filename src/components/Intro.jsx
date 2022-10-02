import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Menu } from './Menu';

export function Intro({ toggleMenu }) {
    return (
        <>
            <Menu toggleMenu={toggleMenu}></Menu>
            <Canvas
                style={{ width: '95vw', height: '95vh', margin: 0, padding: 0 }}
            >
                <Stars />
            </Canvas>
        </>
    );
}
