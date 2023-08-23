import Button from '../button';
import { SectionProps } from './props';
import { SectionBase } from './styles';

const Section = ({ width, height, backgroundColor, padding }: SectionProps) => {
  return (
    <SectionBase
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $padding={padding}
    >
      <Button width="90px" borderRadius="50%" backgroundColor="#f6f266" />
      <Button backgroundColor="#fff" />
    </SectionBase>
  );
};

export default Section;
