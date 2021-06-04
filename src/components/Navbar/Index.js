import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
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
                            <NavLinks to="about"
                             smooth={true} 
                             duration={500}
                             spy={true}
                             exact={true}
                             offset={-80}
                             activeClass="active"
                             >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skill" smooth={true} 
                             duration={500}
                             spy={true}
                             exact={true}
                             offset={-80}
                             activeClass="active">Advance</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portofolio" smooth={true} 
                             duration={500}
                             spy={true}
                             exact={true}
                             offset={-80}
                             activeClass="active">Portofolio</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLinks to="contact"   
                            duration={500}
                             spy={true}
                             exact={true}
                             offset={-80}
                             activeClass="active">Contact Me</NavBtnLinks>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
