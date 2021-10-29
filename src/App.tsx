import React from 'react';
import styled from 'styled-components';
import { RoutesStructure } from './router';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <Wrap>
      <Header />
      <main>
        <Container>
          <RoutesStructure />
        </Container>
      </main>
      <Footer />
    </Wrap>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
  min-width: 360px;
  padding: 0 10px;
`;

const Wrap = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 76px 1fr 76px;
`;
