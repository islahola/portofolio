import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,
    NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLinks} from './NavbarElement'

    const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>isolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="advance">Advance</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portofolio">Portofolio</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLinks>Contact Me</NavBtnLinks>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
