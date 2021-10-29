import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  caption,
  disabled,
  type,
  width,
  onClick,
  isFilled,
  icon = null,
}) => {
  return (
    <div>
      <StyledButton
        type={type}
        vDisabled={disabled}
        disabled={disabled}
        width={width}
        onClick={() => onClick && onClick()}
        isFilled={isFilled}
        icon={icon}
      >
        {caption}
      </StyledButton>
    </div>
  );
};

const styledButtonDisabledStyleOverride = css`
  background: #dbe2ea;
  border-radius: 6px;
  color: #b1b5bf;
  :active {
    border: none;
    opacity: 100%;
  }
`;

const StyledButton = styled.button<{
  vDisabled: boolean;
  width: number;
  isFilled: boolean;
  icon?: string | null;
}>`
  background: ${({ isFilled }) => (isFilled ? '#01a7fd' : '#fff')};
  color: ${({ isFilled }) => (isFilled ? '#fff' : '#01a7fd')};
  border: 2px solid #01a7fd;
  border-radius: 100px;
  height: 44px;
  min-width: ${({ width }) => width}px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  cursor: pointer;

  :active {
    opacity: 50%;
  }

  transition: opacity 200ms ease;

  ${({ vDisabled }) => (vDisabled ? styledButtonDisabledStyleOverride : '')}

  ${({ icon }) => (icon ? getIconCss(icon) : '')}
`;

const getIconCss = (icon: string) =>
  css`
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center left 15px;
    padding-left: 40px;
    padding-right: 15px;
  `;
