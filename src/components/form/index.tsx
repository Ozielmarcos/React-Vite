import { FormProps } from './props';
import { FormBase } from './styles';

export const Form = ({
  width,
  height,
  padding,
  backgroundColor,
  borderRadius,
}: FormProps) => {
  return (
    <FormBase
      $width={width}
      $height={height}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
    >
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </FormBase>
  );
};
