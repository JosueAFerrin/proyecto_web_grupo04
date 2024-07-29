import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
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
