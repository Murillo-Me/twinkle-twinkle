import { NavContainer, Button } from '../styles';

function NavButton({ starType, setVariableType }) {
    const text = starType[0].toUpperCase() + starType.substring(1);

    return <Button onClick={() => setVariableType(starType)}>{text}</Button>;
}

export function Navigation({ setVariableType }) {
    return (
        <NavContainer>
            <NavButton
                starType="pulsating"
                setVariableType={setVariableType}
            ></NavButton>
            <NavButton
                starType="binary"
                setVariableType={setVariableType}
            ></NavButton>
            <NavButton
                starType="cataclysmic"
                setVariableType={setVariableType}
            ></NavButton>
            <NavButton
                starType="rotating"
                setVariableType={setVariableType}
            ></NavButton>
            <NavButton
                starType="eruptive"
                setVariableType={setVariableType}
            ></NavButton>
        </NavContainer>
    );
}
