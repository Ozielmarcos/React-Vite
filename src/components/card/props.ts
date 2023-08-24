import { ReactNode } from 'react';

export interface CardBaseProps {
  $width?: string;
  $height?: string;
  $color?: string;
  $border?: string;
  $boxShadow?: string;
  $display?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $backgroundColor?: string;
  $margin?: string;
}

export interface CardProps {
  width?: string;
  height?: string;
  color?: string;
  border?: string;
  boxShadow?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
  margin?: string;
  chilldren?: ReactNode;
}
