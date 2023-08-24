import { TituloProps } from "./props"
import { TituloBase } from "./styles"

const Titulo = ({ fontSize, color
}: TituloProps) => {
  return (
    <TituloBase
      $fontSize={fontSize}
      $color={color}
    >Login
    </TituloBase>
  )
}
export default Titulo