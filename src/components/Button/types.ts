import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  caption: string;
  disabled: boolean;
  type: ButtonHTMLAttributes<null>['type'];
  width: number;
  onClick?(): void;
  isFilled: boolean;
  icon?: string;
}
