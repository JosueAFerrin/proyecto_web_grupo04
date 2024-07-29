import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6347; // Usa un color de fondo en lugar de una imagen
  padding: 40px 20px;
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-family: 'Brush Script MT', cursive; // Cambia la fuente a una más acorde con la temática de sushi
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const BannerSubtitle = styled.p`
  margin: 10px 0 0;
  font-size: 24px;
  font-weight: normal;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Banner = () => (
  <BannerContainer>
    <div>
      <BannerTitle>DRAGON ROJO</BannerTitle>
      <BannerSubtitle>Deliciosos y frescos rollitos de sushi</BannerSubtitle>
    </div>
  </BannerContainer>
);

export default Banner;
