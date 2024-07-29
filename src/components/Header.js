// src/components/Header.js

import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #ff6347;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;

const Header = () => (
  <HeaderContainer>
    <SocialIcons>
      <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </SocialIcon>
      <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialIcon>
    </SocialIcons>
  </HeaderContainer>
);

export default Header;
