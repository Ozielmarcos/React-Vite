import { TituloProps } from './props';
import { TituloBase } from './styles';

const Titulo = ({ children, padding, color, fontSize }: TituloProps) => {
  return (
    <TituloBase $fontSize={fontSize} $padding={padding} $color={color}>
      {children}
    </TituloBase>
  );
};
export default Titulo;
