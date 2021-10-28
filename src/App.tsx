import React from 'react';
import styled from 'styled-components';
import { RoutesStructure } from './router';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <RoutesStructure />
        </Container>
      </main>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
  min-width: 360px;
`;
