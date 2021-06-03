import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper
,SidebarMenu,SideBtnWrap,SidebarLink,SidebarRoute} from './SidebarElement'
const Sidebar = ({isOpen,toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink>About</SidebarLink>
                        <SidebarLink>Advance</SidebarLink>
                        <SidebarLink>Portofilio</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
                <SideBtnWrap>
                    <SidebarRoute>Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
