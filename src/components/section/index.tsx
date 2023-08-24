import { Form } from '../form';
import { SectionProps } from './props';
import { SectionBase } from './styles';

const Section = ({
  width,
  height,
  backgroundColor,
  padding,
  margin,
  alignItems,
  display,
  justifyContent,
}: SectionProps) => {
  return (
    <SectionBase
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $padding={padding}
      $alignItems={alignItems}
      $display={display}
      $justifyContent={justifyContent}
      $margin={margin}
    >
      <Form
        backgroundColor="#232323"
        padding="20px"
        borderRadius="10px"
        height="80vh"
        width="300px"
      />
    </SectionBase>
  );
};

export default Section;
