// src/components/SideBar.js

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSyncAlt, faFish, faLeaf, faThList, faUtensils } from '@fortawesome/free-solid-svg-icons';
import FloatingChatBot from './FloatingChatBot';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SidebarItems = styled.div`
  flex: 1;
`;

const SidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    color: darkorange;
    transform: scale(1.1);
  }
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  transition: transform 0.3s;

  ${SidebarItemContainer}:hover & {
    transform: scale(1.2);
  }
`;

const SidebarItem = ({ icon, children }) => (
  <SidebarItemContainer>
    <SidebarIcon icon={icon} />
    {children}
  </SidebarItemContainer>
);

const Sidebar = () => (
  <SidebarContainer>
    <SidebarItems>
      <SidebarItem icon={faHome}>Principal</SidebarItem>
      <SidebarItem icon={faSyncAlt}>Roles Invertidos</SidebarItem>
      <SidebarItem icon={faFish}>Rollos de Filadelfia</SidebarItem>
      <SidebarItem icon={faLeaf}>Rollos Clásicos</SidebarItem>
      <SidebarItem icon={faThList}>Maki</SidebarItem>
      <SidebarItem icon={faUtensils}>Nigiri</SidebarItem>
    </SidebarItems>
    <FloatingChatBot />
  </SidebarContainer>
);

export default Sidebar;
