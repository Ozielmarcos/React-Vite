import { CardProps } from './props';
import { CardBase } from './styles';

const Card = ({
  alignItems,
  backgroundColor,
  border,
  boxShadow,
  color,
  display,
  height,
  justifyContent,
  width,
  margin,
  chilldren,
}: CardProps) => {
  return (
    <CardBase
      $alignItems={alignItems}
      $backgroundColor={backgroundColor}
      $border={border}
      $boxShadow={boxShadow}
      $color={color}
      $display={display}
      $height={height}
      $justifyContent={justifyContent}
      $width={width}
      $margin={margin}
    >
      {chilldren}
    </CardBase>
  );
};
export default Card;
