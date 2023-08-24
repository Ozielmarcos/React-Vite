import { ButtonProps } from './props';
import { ButtonBase } from './styles';

<<<<<<< HEAD
const Button = ({
  width,
  borderRadius,
  backgroundColor,
  padding,
  fontSize,
  margin,
  border,
  children,
}: ButtonProps) => {
=======
const Button = ({ width, borderRadius, backgroundColor, padding }: ButtonProps) => {
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
  return (
    <ButtonBase
      $width={width}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $padding={padding}
<<<<<<< HEAD
      $fontSize={fontSize}
      $margin={margin}
      $border={border}
    >
      {children}
=======
    >
      Cadastrar
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
    </ButtonBase>
  );
};
export default Button;
