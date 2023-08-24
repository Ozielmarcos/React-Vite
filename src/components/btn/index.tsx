import { BtnProps } from './props';
import { BtnBase } from './styles';

const Btn = ({ primary, children }: BtnProps) => {
  return <BtnBase $primary={primary}>{children}</BtnBase>;
};
export default Btn;
