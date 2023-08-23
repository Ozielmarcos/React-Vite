import styled from 'styled-components';
import { FormBaseProps } from './props';

export const FormBase = styled.form<FormBaseProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
`;
