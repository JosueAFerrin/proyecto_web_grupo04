// src/pages/Home.js

import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Banner from '../components/Banner';
import HotDeals from '../components/HotDeals';
import Header from '../components/Header';

const HomeContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 60px; // Ajusta según la altura de tu Navbar
`;

const Home = () => (
  <div>
    <Navbar />
    <HomeContainer>
      <SideBar />
      <Content>
        <Banner />
        <HotDeals />
      </Content>
    </HomeContainer>
    <Header />
  </div>
);

export default Home;
