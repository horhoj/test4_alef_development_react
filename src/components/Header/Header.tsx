import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/Logo.svg';
import { getPathByName } from '../../router';

export const Header: React.FC = () => {
  return (
    <Wrap>
      <Logo src={logo} />
      <nav>
        <StyledUl>
          <li>
            <StyledNavLink to={getPathByName('userData')}>Форма</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={getPathByName('profile')}>Превью</StyledNavLink>
          </li>
        </StyledUl>
      </nav>
      <div />
    </Wrap>
  );
};

const Wrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  height: 76px;
  align-items: center;
`;

const Logo = styled.img`
  height: 29px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
  &.active {
    color: rgba(17, 17, 17, 1);
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
`;
