import { MenuContainer, MenuButton } from '../styles';
import pulsatingImg from '../assets/pulsating.png';
import cataclysmImg from '../assets/cataclysm.png';
import eclipsingImg from '../assets/eclipsing.png';

export function Menu({ toggleMenu }) {
    return (
        <MenuContainer>
            <MenuButton
                id="pulsating"
                style={{ marginLeft: '50px', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={pulsatingImg} alt="" />
            </MenuButton>
            <MenuButton
                id="cataclysmic"
                style={{ marginLeft: 'auto', marginRight: '50px' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={cataclysmImg} alt="" />
            </MenuButton>
            <MenuButton
                id="binary"
                style={{ marginLeft: '50px', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={eclipsingImg} alt="" />
            </MenuButton>
        </MenuContainer>
    );
}
