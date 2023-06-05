import React from 'react';
import { NavBody, NavItem, NavMenuItems } from './styles';

function NavBar () {
    return (
        <>
            <NavBody background={'grey'} colorText={'white'}>
                <NavMenuItems colorText='white'>
                   <NavItem>Botões</NavItem>
                   <NavItem>Inputs</NavItem>
                   <NavItem>Tables</NavItem>
                </NavMenuItems>
            </NavBody>
        </>
    )
}

export default NavBar