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
  children,
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
      {children}
    </SectionBase>
  );
};

export default Section;
