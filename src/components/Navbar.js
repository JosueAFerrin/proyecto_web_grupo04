import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

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
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  color: black;
  text-decoration: none;

  &:hover {
    color: darkorange;
    transform: scale(1.1);
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: darkorange;
    transform: scale(1.1);
  }
`;

const SearchInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 10px;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
`;

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
  };

  return (
    <NavbarContainer>
      <Logo>SUCHEFF</Logo>
      <Menu>
        <MenuItem to="/contact">Contactos</MenuItem>
        <MenuItem to="/">Servicios</MenuItem>
        <MenuItem to="/">Acerca de Nosotros</MenuItem>
        <MenuItem to="/">Entregas</MenuItem>
        <MenuItem to="/">Promociones y Novedades</MenuItem>
        <SearchIcon onClick={toggleSearch} />
        <SearchInput show={showSearch} placeholder="Buscar..." />
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
