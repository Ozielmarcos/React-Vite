import Button from '../button';
import Input from '../input';
import Titulo from '../titulo';
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
      <Titulo fontSize='45px' color='#fff'></Titulo>
      <Input padding='10px' borderRadius='5px' />
      <Input padding='10px' borderRadius='5px' />
      <Input padding='10px' borderRadius='5px' />
      <Button width='100%' borderRadius='5px' padding='10px' />
    </FormBase>
  );
};
