import styled from 'styled-components';

export const BackButton = styled.button`
    z-index: 10;
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgba(50, 50, 50, 0.6);
    font-color: white;
    font-weight: bold;
    font-size: 2rem;
    top: 50px;
    left: 200px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 5px white;
    color: white;
    // border: none;

    &:hover {
        box-shadow: 3px 3px 15px white;
    }
    transition: box-shadow ease 0.2s;
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
    box-shadow: 1px 1px 5px white;
    border: none;

    &:hover {
        box-shadow: 3px 3px 15px white;
    }
    transition: box-shadow ease 0.2s;
`;

export const MenuContainer = styled.div`
    z-index: 10;
    position: absolute;
    top: 150px;
    left: 20vw;
    width: 60vw;
    height: 60vh;
`;

export const MenuCategory = styled.div`
    z-index: -10;
    position: absolute;
    top: -50px;
    width: 500px;
    height: 800px;
    padding-inline: 20px;
    padding-bottom: 20;
    opacity: 0;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
        opacity: 1;
        border: 1px solid white;
    }
    border-radius: 10px;
`;

export const MenuButton = styled.div`
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
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
    width: 700px;
    border-radius: 16px;
    color: white;
    padding-bottom: 10px;
    &.category {
        height: 200px;
        font-size: 1.1rem;
    }
`;

export const TooltipTitle = styled.h2`
    color: white;
    margin-left: 20px;
`;

export const TooltipText = styled.p`
    color: darkgrey;
    margin-left: 30px;
`;
