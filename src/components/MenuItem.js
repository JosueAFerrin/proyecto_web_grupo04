import React from 'react';
import styled from 'styled-components';

const MenuItemContainer = styled.div`
  width: 250px;
  text-align: center;
  margin: 20px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuItemImage = styled.img`
  width: 100%;
  border-radius: 15px;
  transition: opacity 0.3s;

  ${MenuItemContainer}:hover & {
    opacity: 0.7;
  }
`;

const MenuItemTitle = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

const ItemDetails = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  width: 90%;
  text-align: center;

  ${MenuItemContainer}:hover & {
    opacity: 1;
  }
`;

const MenuItem = ({ title, image, price, description }) => (
  <MenuItemContainer>
    <MenuItemImage src={image} alt={title} />
    <ItemDetails>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </ItemDetails>
    <MenuItemTitle>{title}</MenuItemTitle>
  </MenuItemContainer>
);

export default MenuItem;
