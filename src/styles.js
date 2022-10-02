import styled from 'styled-components';

export const BackButton = styled.button`
    z-index: 10;
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgba(50, 50, 50, 0.6);
    font-color: white;
    font-size: bold;
    top: 50px;
    left: 200px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 2px 2px 5px white;
    // border: none;

    &:hover {
        box-shadow: 5px 5px 15px white;
    }
`;

export const InfoContainer = styled.div`
    z-index: 10;
    position: absolute;
    left: 55vw;
    top: 20vh;
    width: 40%;
    height: 450px;
    background-color: rgba(64, 59, 54, 0.8);
    border-radius: 20px;
    border: 1px solid black;
`;

export const InfoTitle = styled.h2`
    margin-top: 30px;
    margin-left: 40px;
    color: white;
`;

export const InfoText = styled.p`
    margin-left: 30px;
    margin-right: 25px;
    color: lightgrey;
    text-indent: 40px;
    font-size: 1.2rem;
    line-height: 1.5rem;
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
    z-index: 10;
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
    z-index: 10;
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

export const Tooltip = styled.div`
    background-color: rgba(50, 50, 50, 0.7);
    height: 100px;
    min-width: 100%;
    border-radius: 16px;
    color: white;
    padding-bottom: 10px;
`;

export const TooltipTitle = styled.h2`
    color: white;
    margin-left: 20px;
`;

export const TooltipText = styled.p`
    color: darkgrey;
    margin-left: 30px;
`;
