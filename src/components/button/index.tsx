import { ButtonProps } from './props';
import { ButtonBase } from './styles';

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
  return (
    <ButtonBase
      $width={width}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $padding={padding}
      $fontSize={fontSize}
      $margin={margin}
      $border={border}
    >
      {children}
    </ButtonBase>
  );
};
export default Button;
