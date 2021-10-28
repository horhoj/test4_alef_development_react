import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
