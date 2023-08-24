import Button from '../button';
import Input from '../input';
<<<<<<< HEAD
import Label from '../label';
=======
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
import Titulo from '../titulo';
import { FormProps } from './props';
import { FormBase } from './styles';

export const Form = ({
  width,
  height,
  padding,
  backgroundColor,
  borderRadius,
  margin,
  textAlign,
}: FormProps) => {
  return (
    <FormBase
      $width={width}
      $height={height}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $margin={margin}
      $textAlign={textAlign}
    >
<<<<<<< HEAD
      <Titulo color="white" fontSize="30px">
        Login
      </Titulo>
      <Label color="white" fontsize=".5em" textAlign="left" width="100%">
        Nome
      </Label>
      <Input
        type="text"
        fontSize=".5em"
        width="100%"
        padding="3px"
        margin="0 0 10px 0"
        placeholder="Digite seu nome"
        required
      />
      <Label color="white" fontsize=".5em" textAlign="left" width="100%">
        E-mail
      </Label>
      <Input
        type="email"
        fontSize=".5em"
        width="100%"
        padding="3px"
        margin="0 0 10px 0"
        placeholder="Digite o e-mail"
        required
      />
      <Label color="white" fontsize=".5em" textAlign="left" width="100%">
        Senha
      </Label>
      <Input
        type="password"
        fontSize=".5em"
        width="100%"
        padding="3px"
        margin="0 0 10px 0"
        placeholder="Digite a senha"
        required
      />
      <Button
        padding="5px"
        fontSize=".6em"
        width="50%"
        margin="10px 0"
        borderRadius="10px"
        border="none"
      >
        Entrar
      </Button>
=======
      <Titulo fontSize='45px' color='#fff'></Titulo>
      <Input padding='10px' borderRadius='5px' />
      <Input padding='10px' borderRadius='5px' />
      <Input padding='10px' borderRadius='5px' />
      <Button width='100%' borderRadius='5px' padding='10px' />
>>>>>>> b3ff6fcc3999c156cb1fd8116ce980e92d7373a6
    </FormBase>
  );
};
