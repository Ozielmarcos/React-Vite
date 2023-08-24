import { styled } from "styled-components";
import { TituloBaseProps } from "./props";

export const TituloBase = styled.h1<TituloBaseProps>`
font-size: ${(props) => props.$fontSize};
color: ${(props) => props.$color};
`