import { InfoContainer, InfoTitle, InfoText } from '../styles.js';

export function Info({ content }) {
    return (
        <InfoContainer>
            <InfoTitle>{content.title}</InfoTitle>
            <InfoText>{content.text}</InfoText>
        </InfoContainer>
    );
}
