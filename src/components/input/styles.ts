import { styled } from "styled-components";
import { InputBaseProps } from "./props";


export const InputBase = styled.input<InputBaseProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
`