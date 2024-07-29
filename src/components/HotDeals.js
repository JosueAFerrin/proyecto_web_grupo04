// src/components/HotDeals.js

import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

// Importa las imágenes
import SalmonRoll from '../assets/images/salmon-roll.jpg';
import TempuraRoll from '../assets/images/tempura-roll.jpg';
import CaviarRoll from '../assets/images/caviar-roll.jpg';
import VeganRoll from '../assets/images/vegan-roll.jpg';

const HotDealsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const deals = [
  { title: 'Rollos de Salmón', image: SalmonRoll },
  { title: 'Rollos Tempurizados', image: TempuraRoll },
  { title: 'Rollos con Caviar', image: CaviarRoll },
  { title: 'Rollos veganos', image: VeganRoll },
];

const HotDeals = () => (
  <HotDealsContainer>
    {deals.map((deal, index) => (
      <MenuItem key={index} title={deal.title} image={deal.image} />
    ))}
  </HotDealsContainer>
);

export default HotDeals;
