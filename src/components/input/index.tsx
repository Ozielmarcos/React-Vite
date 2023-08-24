import { InputProps } from './props';
import { InputBase } from './styles';

const Input = ({
  width,
  padding,
  backgroundColor,
  borderRadius,
  margin,
  fontSize,
  color,
  ...props
}: InputProps) => {
  return (
    <InputBase
      $width={width}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $margin={margin}
      $color={color}
      $fontSize={fontSize}
      {...props}
    ></InputBase>
  );
};

export default Input;
