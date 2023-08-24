import styled from 'styled-components';
import { LabelBaseProps } from './props';

export const LabelBase = styled.label<LabelBaseProps>`
  font-size: ${(props) => props.$fontsize};
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$textAlign};
  width: ${(props) => props.$width};
`;
