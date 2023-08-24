import styled from 'styled-components';
import { BtnBaseProps } from './props';

export const BtnBase = styled.button<BtnBaseProps>`
  background: ${(props) => (props.$primary ? '#232323' : '#cc1cc1')};
  color: ${(props) => (props.$primary ? '#cc1cc1' : '#232323')};

  font-size: 14px;
  margin: 10px;
  border: 2px solid #eeeccc;
  width: 50px;
  height: 20px;
`;
