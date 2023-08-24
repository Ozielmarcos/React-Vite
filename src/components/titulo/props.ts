import { ReactNode } from 'react';

export interface TituloBaseProps {
  $fontSize?: string;
  $padding?: string;
  $color?: string;
}

export interface TituloProps {
  fontSize?: string;
  padding?: string;
  color?: string;
  children?: ReactNode;
}
