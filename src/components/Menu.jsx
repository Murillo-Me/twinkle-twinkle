import { useState } from 'react';
import {
    MenuContainer,
    MenuButton,
    Tooltip,
    TooltipTitle,
    TooltipText,
} from '../styles';
import { useFloating } from '@floating-ui/react-dom';
import pulsatingImg from '../assets/pulsating.png';
import cataclysmImg from '../assets/cataclysm.png';
import eclipsingImg from '../assets/eclipsing.png';
import { content } from '../util/constants';

export function Menu({ toggleMenu }) {
    const { x, y, reference, floating, strategy } = useFloating();
    const [tooltip, setTooltip] = useState('');

    function handleTooltip(e) {
        setTooltip(e.type === 'mouseover' ? e.currentTarget.id : '');
    }

    return (
        <MenuContainer>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'pulsating' ? reference : null}
                id="pulsating"
                style={{ marginLeft: '50px', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={pulsatingImg} alt="" />
            </MenuButton>
            <MenuButton
                // ref={reference}
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'cataclysmic' ? reference : null}
                id="cataclysmic"
                style={{ marginLeft: 'auto', marginRight: '50px' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={cataclysmImg} alt="" />
            </MenuButton>
            <MenuButton
                onMouseOver={handleTooltip}
                onMouseOut={handleTooltip}
                ref={tooltip === 'binary' ? reference : null}
                id="binary"
                style={{ marginLeft: '50px', marginRight: 'auto' }}
                onClick={(e) => toggleMenu(e.currentTarget.id)}
            >
                <img src={eclipsingImg} alt="" />
            </MenuButton>
            {tooltip && (
                <Tooltip
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
        </MenuContainer>
    );
}
