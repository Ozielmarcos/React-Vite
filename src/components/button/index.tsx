import { ButtonProps } from './props';
import { ButtonBase } from './styles';

const Button = ({ width, borderRadius, backgroundColor }: ButtonProps) => {
  return (
    <ButtonBase
      $width={width}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
    >
      Click me!
    </ButtonBase>
  );
};
export default Button;
