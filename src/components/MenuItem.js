import React from 'react';
import styled from 'styled-components';

const MenuItemContainer = styled.div`
  width: 250px;
  text-align: center;
  margin: 20px;
`;

const MenuItemImage = styled.img`
  width: 100%;
`;

const MenuItemTitle = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

const MenuItem = ({ title, image }) => (
  <MenuItemContainer>
    <MenuItemImage src={image} alt={title} />
    <MenuItemTitle>{title}</MenuItemTitle>
  </MenuItemContainer>
);

export default MenuItem;
