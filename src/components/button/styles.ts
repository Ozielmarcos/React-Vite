import styled from 'styled-components';
import { ButtonBaseProps } from './props';

export const ButtonBase = styled.button<ButtonBaseProps>`
  width: ${(props) => props.$width};
  border-radius: ${(props) => props.$borderRadius};
  background-color: ${(props) => props.$backgroundColor};
<<<<<<< HEAD
  padding: ${(props) => props.$padding};
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};

  cursor: pointer;
=======
  padding: ${(props) => props.$padding}
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
`;
