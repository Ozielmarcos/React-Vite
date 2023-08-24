import { ButtonProps } from './props';
import { ButtonBase } from './styles';

const Button = ({ width, borderRadius, backgroundColor, padding }: ButtonProps) => {
  return (
    <ButtonBase
      $width={width}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $padding={padding}
    >
      Cadastrar
    </ButtonBase>
  );
};
export default Button;
