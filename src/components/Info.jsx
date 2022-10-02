import { InfoContainer, InfoTitle, InfoText, InfoLink } from '../styles.js';

export function Info({ content }) {
    return (
        <InfoContainer className={content.id === 'hr-diagram' ? 'larger' : ''}>
            <InfoTitle>{content?.title}</InfoTitle>
            <InfoText>{content?.text}</InfoText>
            <InfoLink href={content?.link} target="_blank">
                Click for detailed content
            </InfoLink>
        </InfoContainer>
    );
}