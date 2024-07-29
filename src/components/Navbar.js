import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: orange;
  transition: color 0.3s;

  &:hover {
    color: darkorange;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  color: black;

  &:hover {
    color: darkorange;
    transform: scale(1.1);
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>SUCHEFF</Logo>
    <Menu>
      <MenuItem>Contactos</MenuItem>
      <MenuItem>Servicios</MenuItem>
      <MenuItem>Acerca de Nosotros</MenuItem>
      <MenuItem>Entregas</MenuItem>
      <MenuItem>Promociones y Novedades</MenuItem>
    </Menu>
  </NavbarContainer>
);

export default Navbar;
