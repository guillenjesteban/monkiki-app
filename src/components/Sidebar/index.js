import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements"

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="nosotros" onClick={toggle}>
                        Nosotros
                    </SidebarLink>
                    <SidebarLink to="beneficios" onClick={toggle}>
                        Beneficios
                    </SidebarLink>
                    <SidebarLink to="veterinarias" onClick={toggle}>
                        Veterinarias
                    </SidebarLink>
                    <SidebarLink to="legales" onClick={toggle}>
                        Legales
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{ pathname: "https://linktr.ee/monkikiapp"}} onClick={toggle}>Descargar App</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}


export default Sidebar;
