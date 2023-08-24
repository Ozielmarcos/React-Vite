<<<<<<< HEAD
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
=======
import { InputProps } from "./props";
import { InputBase } from "./styles";

const Input = ({ width, height, padding, backgroundColor, borderRadius }: InputProps) => {
  return (
    <InputBase
      $width={width}
      $height={height}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
    >
    </InputBase>
  )
}
export default Input;
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
