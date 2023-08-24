import styled from 'styled-components';
import { ButtonBase } from '../button/styles';
import { SectionBaseProps } from './props';

export const SectionBase = styled.section<SectionBaseProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$backgroundColor};
  padding: ${(props) => props.$padding};
  display: ${(props) => props.$display};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  margin: ${(props) => props.$margin};

  ${ButtonBase}:hover {
    background-color: #000;
    color: #fff;
  }
`;
