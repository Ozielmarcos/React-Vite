import styled from 'styled-components';
import { InputBaseProps } from './props';

export const InputBase = styled.input<InputBaseProps>`
  width: ${(props) => props.$width};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.$margin};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
`;
