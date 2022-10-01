import styled from 'styled-components';

export const InfoContainer = styled.div`
    position: absolute;
    left: 50vw;
    top: 20vh;
    width: 40%;
    height: 50%;
    background-color: rgba(64, 59, 54, 0.8);
    border-radius: 10px;
    border: 1px solid black;
    z-index: 1;
`;

export const InfoTitle = styled.h2`
    margin-left: 30px;
    color: white;
`;

export const InfoText = styled.p`
    margin-left: 20px;
    margin-right: 10px;
    color: lightgrey;
`;
