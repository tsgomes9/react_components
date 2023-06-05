import styled from "styled-components";

interface NavBodyProps { 
    background?: string;
    colorText?: string;
    justify?: string;
}

export const NavBody = styled.div <NavBodyProps>`
    width: 100%;
    padding: 1% 10px;
    background-color: ${(props) => props.background ? props.background : 'white'};
    color: ${props => props.colorText ? props.colorText : 'black'};
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
`;

interface NavMenuItemsProps {
    colorText?: string; 
}

export const NavMenuItems = styled.ul<NavMenuItemsProps>`
    display: flex;
    list-style: none;
    color: ${props => props.colorText ? props.colorText : 'black'};
    width: 100%;
    justify-content: center;
`


export const NavItem = styled.li `
    padding: 0 2%;
    cursor: pointer;

    &:hover {
        color: yellow;
    }
`
