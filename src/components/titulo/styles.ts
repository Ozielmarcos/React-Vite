<<<<<<< HEAD
import styled from 'styled-components';
import { TituloBaseProps } from './props';

export const TituloBase = styled.h1<TituloBaseProps>`
  font-size: ${(props) => props.$fontSize};
  padding: ${(props) => props.$padding};
  color: ${(props) => props.$color};
`;
=======
import { styled } from "styled-components";
import { TituloBaseProps } from "./props";

export const TituloBase = styled.h1<TituloBaseProps>`
font-size: ${(props) => props.$fontSize};
color: ${(props) => props.$color};
`
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
