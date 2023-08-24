import { ReactNode } from 'react';

export interface LabelBaseProps {
  $fontsize?: string;
  $color?: string;
  $textAlign?: string;
  $width?: string;
}

export interface LabelProps {
  fontsize?: string;
  color?: string;
  textAlign?: string;
  width?: string;
  children?: ReactNode;
}
