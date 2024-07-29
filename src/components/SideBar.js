import React from 'react';
import styled from 'styled-components';

const imageBasePath = '../assets/images/'; 

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
`;

const SidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
`;

const SidebarIcon = styled.img`
  width: 24px; // Ajusta el tamaño del ícono según sea necesario
  height: 24px;
  margin-right: 10px;
`;

const SidebarItem = ({ iconSrc, children }) => (
  <SidebarItemContainer>
    <SidebarIcon src={iconSrc} alt="Icon" />
    {children}
  </SidebarItemContainer>
);

const Sidebar = () => (
  <SidebarContainer>
    <SidebarItem iconSrc={`${imageBasePath}icon-principal.png`}>Principal</SidebarItem>
    <SidebarItem iconSrc={`${imageBasePath}icon-roles-invertidos.png`}>Roles Invertidos</SidebarItem>
    <SidebarItem iconSrc={`${imageBasePath}icon-rollos-filadelfia.png`}>Rollos de Filadelfia</SidebarItem>
    <SidebarItem iconSrc={`${imageBasePath}icon-rollos-clasicos.png`}>Rollos Clásicos</SidebarItem>
    <SidebarItem iconSrc={`${imageBasePath}icon-maxi.png`}>Maki</SidebarItem>
    <SidebarItem iconSrc={`${imageBasePath}icon-nigiri.png`}>Nigiri</SidebarItem>
  </SidebarContainer>
);

export default Sidebar;
