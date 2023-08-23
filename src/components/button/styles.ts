import styled from 'styled-components';
import { ButtonBaseProps } from './props';

export const ButtonBase = styled.button<ButtonBaseProps>`
  width: ${(props) => props.$width};
  border-radius: ${(props) => props.$borderRadius};
  background-color: ${(props) => props.$backgroundColor};
`;
