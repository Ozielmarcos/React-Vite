import styled from 'styled-components';
import { SectionBaseProps } from './props';

export const SectionBase = styled.section<SectionBaseProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$backgroundColor};
  padding: ${(props) => props.$padding};
  display: flex;
  gap: 15px;

  :hover {
    background-color: orange;
  }
`;
