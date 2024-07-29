import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  padding: 20px;
  color: white;
  font-size: 36px;
  font-weight: bold;
`;

const Banner = () => (
  <BannerContainer>
    <div>
      <h1>RED Dragon</h1>
      <p></p>
    </div>
  </BannerContainer>
);

export default Banner;
