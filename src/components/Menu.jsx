import { useState } from 'react';
import {
    MenuContainer,
    MenuCategory,
    MenuCategoryLink,
    MenuButton,
    Tooltip,
    TooltipTitle,
    TooltipText,
    DiagramButton,
} from '../styles';
import { useFloating } from '@floating-ui/react-dom';
import pulsatingImg from '../assets/pulsating.png';
import cataclysmImg from '../assets/cataclysm.png';
import binaryImg from '../assets/eclipsing.png';
import rotatingImg from '../assets/rotating.png';
import eruptiveImg from '../assets/eruptive.png';
import { content } from '../util/constants';

export function Menu({ toggleMenu, toggleDiagramScreen }) {
    const { x, y, reference, floating, strategy } = useFloating();
    const [tooltip, setTooltip] = useState('');

    function handleTooltip(e) {
        setTooltip(e.type === 'mouseover' ? e.currentTarget.id : '');
    }

    return (
        <MenuContainer>
            <MenuCategory style={{ left: '-100px' }}>
                <MenuCategoryLink
                    onMouseOver={handleTooltip}
                    onMouseOut={handleTooltip}
                    id="extrinsic"
                    ref={tooltip === 'extrinsic' ? reference : null}
                    href="https://astronomy.swin.edu.au/cosmos/V/Variable+Stars"
                    target="_blank"
                >
                    Extrinsic
                </MenuCategoryLink>
            </MenuCategory>
            <MenuCategory style={{ right: '-100px' }}>
                <MenuCategoryLink
                    onMouseOver={handleTooltip}
                    onMouseOut={handleTooltip}
                    id="intrinsic"
                    ref={tooltip === 'intrinsic' ? reference : null}
                    href="https://astronomy.swin.edu.au/cosmos/V/Variable+Stars"
                    target="_blank"
                >
                    Intrinsic
                </MenuCategoryLink>
            </MenuCategory>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'pulsating' ? reference : null}
                id="pulsating"
                style={{ marginLeft: 'auto', marginRight: '50px' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={pulsatingImg} alt="" />
            </MenuButton>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'cataclysmic' ? reference : null}
                id="cataclysmic"
                style={{ marginLeft: '0', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={cataclysmImg} alt="" />
            </MenuButton>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'eruptive' ? reference : null}
                id="eruptive"
                style={{ marginLeft: 'auto', marginRight: '180px' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={eruptiveImg} alt="" />
            </MenuButton>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'binary' ? reference : null}
                id="binary"
                style={{ marginLeft: '150px', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={binaryImg} alt="" />
            </MenuButton>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'rotating' ? reference : null}
                id="rotating"
                style={{ marginLeft: 'auto', marginRight: '0px' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={rotatingImg} alt="" />
            </MenuButton>
            {tooltip && (
                <Tooltip
                    className={
                        tooltip.substring(2) === 'trinsic' ? 'category' : ''
                    }
                    ref={floating}
                    style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
                >
                    <TooltipTitle>
                        {content.find((item) => item.id === tooltip)['title']}
                    </TooltipTitle>
                    <TooltipText>
                        {
                            content.find((item) => item.id === tooltip)[
                                'tooltip_text'
                            ]
                        }
                    </TooltipText>
                </Tooltip>
            )}
            <DiagramButton onClick={toggleDiagramScreen}>
                HR Diagram for Nearby Stars
            </DiagramButton>
        </MenuContainer>
    );
}
