import { LabelProps } from './props';
import { LabelBase } from './styles';

const Label = ({ fontsize, color, textAlign, width, children }: LabelProps) => {
  return (
    <LabelBase
      $color={color}
      $fontsize={fontsize}
      $textAlign={textAlign}
      $width={width}
    >
      {children}
    </LabelBase>
  );
};
export default Label;
