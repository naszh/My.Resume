import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { ParagraphText } from './about.styled';

export const AboutMe = () => {
  return (
    <BlockContainer>
      <BlockHeader>About me</BlockHeader>
      <ParagraphText>
        Junior Frontend Developer with deep knowledge of web technologies.
        Practical experience in creating layouts using React(JS/TS), Redux,
        HTML, CSS and preprocessors. Worked with Figma, API requests, react
        libraries.
        <br />
        Always have a strong desire to expand my knowledge. Solid knowledge of
        English, both speaking and writing.
      </ParagraphText>
    </BlockContainer>
  );
};
