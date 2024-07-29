import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Banner from '../components/Banner';
import HotDeals from '../components/HotDeals';

const HomeContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Home = () => (
  <div>
    <Navbar />
    <HomeContainer>
      <Sidebar />
      <Content>
        <Banner />
        <HotDeals />
      </Content>
    </HomeContainer>
  </div>
);

export default Home;
