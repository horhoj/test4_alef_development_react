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
  
  body {
    min-width: 400px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #111111;
`;

export const Element = styled.div<{
  mt: number;
}>`
  margin-top: ${({ mt }) => mt}px;
`;
