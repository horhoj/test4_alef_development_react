import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return <StyledFooter>all rights reserved</StyledFooter>;
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
