import { InfoContainer, InfoTitle, InfoText, InfoLink } from '../styles.js';

export function Info({ content }) {
    return (
        <InfoContainer className={content.id === 'hr-diagram' ? 'larger' : ''}>
            <InfoTitle>{content?.title}</InfoTitle>
            {content.text.map((item, index) => (
                <InfoText key={index}>{item}</InfoText>
            ))}
            <InfoLink href={content?.link} target="_blank">
                Click for detailed content
            </InfoLink>
        </InfoContainer>
    );
}
