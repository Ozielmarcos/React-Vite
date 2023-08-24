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