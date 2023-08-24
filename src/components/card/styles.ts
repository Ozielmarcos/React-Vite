import styled from 'styled-components';
import logo from '../../assets/vip1.png';
import { CardBaseProps } from './props';

export const CardBase = styled.div<CardBaseProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => props.color};
  border: ${(props) => props.$border};
  box-shadow: ${(props) => props.$boxShadow};
  display: ${(props) => props.$display};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  background-color: ${(props) => props.$backgroundColor};
  margin: ${(props) => props.$margin};

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
`;
