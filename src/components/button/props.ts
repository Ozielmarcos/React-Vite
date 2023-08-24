import { ReactNode } from 'react';

export interface ButtonBaseProps {
  $width?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $padding?: string;
  $fontSize?: string;
  $margin?: string;
  $border?: string;
}

export interface ButtonProps {
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
  fontSize?: string;
  margin?: string;
  border?: string;
  children?: ReactNode;
}
