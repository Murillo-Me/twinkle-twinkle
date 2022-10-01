import { InfoContainer, InfoTitle, InfoText } from '../styles.js';

export function Info({ title, text }) {
    console.log(title);

    return (
        <InfoContainer>
            <InfoTitle>{title}</InfoTitle>
            <InfoText>{text}</InfoText>
        </InfoContainer>
    );
}
