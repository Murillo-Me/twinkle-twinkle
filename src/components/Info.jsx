import { InfoContainer, InfoTitle, InfoText, InfoLink } from '../styles.js';

export function Info({ content }) {
    return (
        <InfoContainer>
            <InfoTitle>{content.title}</InfoTitle>
            <InfoText>{content.text}</InfoText>
            <InfoLink href={content.link}>Click for detailed content</InfoLink>
        </InfoContainer>
    );
}
