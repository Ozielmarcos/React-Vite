<<<<<<< HEAD
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
=======
import { TituloProps } from "./props"
import { TituloBase } from "./styles"

const Titulo = ({ fontSize, color
}: TituloProps) => {
  return (
    <TituloBase
      $fontSize={fontSize}
      $color={color}
    >Login
    </TituloBase>
  )
}
export default Titulo
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
