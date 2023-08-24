import { ReactNode } from 'react';

export interface BtnBaseProps {
  $primary?: boolean;
}
export interface BtnProps {
  primary?: boolean;
  children?: ReactNode;
}
