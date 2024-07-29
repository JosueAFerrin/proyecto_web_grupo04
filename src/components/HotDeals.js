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
  {
    title: 'Rollos de Salmón',
    image: SalmonRoll,
    price: '$12.99',
    description: 'Deliciosos rollos de salmón fresco con aguacate y pepino.'
  },
  {
    title: 'Rollos Tempurizados',
    image: TempuraRoll,
    price: '$10.99',
    description: 'Rollos crujientes tempurizados con camarones y vegetales.'
  },
  {
    title: 'Rollos con Caviar',
    image: CaviarRoll,
    price: '$15.99',
    description: 'Exquisitos rollos con caviar y una mezcla de sabores únicos.'
  },
  {
    title: 'Rollos veganos',
    image: VeganRoll,
    price: '$9.99',
    description: 'Rollos veganos con una combinación de vegetales frescos.'
  },
];

const HotDeals = () => (
  <HotDealsContainer>
    {deals.map((deal, index) => (
      <MenuItem
        key={index}
        title={deal.title}
        image={deal.image}
        price={deal.price}
        description={deal.description}
      />
    ))}
  </HotDealsContainer>
);

export default HotDeals;
