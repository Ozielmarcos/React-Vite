import { InputHTMLAttributes } from 'react';

export interface InputBaseProps {
  $width?: string;
  $padding?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $margin?: string;
  $fontSize?: string;
  $color?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  fontSize?: string;
  coor?: string;
}
