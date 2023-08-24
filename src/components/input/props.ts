<<<<<<< HEAD
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
=======
export interface InputBaseProps {
  $width?: string;
  $height?: string;
  $padding?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
}

export interface InputProps {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
}
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
