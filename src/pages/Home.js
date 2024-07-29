// src/pages/Home.js

import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Banner from '../components/Banner';
import HotDeals from '../components/HotDeals';
import FloatingChatBot from '../components/FloatingChatBot';
import Header from '../components/Header';

const HomeContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Home = () => (
  <div>
    <Header />
    <Navbar />
    <HomeContainer>
      <SideBar />
      <Content>
        <Banner />
        <HotDeals />
      </Content>
    </HomeContainer>
    <FloatingChatBot />
  </div>
);

export default Home;
