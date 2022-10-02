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

export const NavContainer = styled.ul`
    position: absolute;
    bottom: 100px;
    left: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    z-index: 3;
    width: 150px;
    height: 80px;
    margin-inline: 50px;
    background-color: rgba(50, 50, 50, 0.6);
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 2px 2px 5px white;

    &:hover {
        box-shadow: 5px 5px 15px white;
    }
`;

export const MenuContainer = styled.div`
    z-index: 2;
    position: absolute;
    top: 100px;
    left: 30vw;
    width: 40vw;
    height: 80vh;
`;

export const MenuButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    // background-color: grey;
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
    }
    // &:hover.pulsating {
    //     filter: hue-rotate(90);
    // }
    transition: transform ease 0.5s;
`;
