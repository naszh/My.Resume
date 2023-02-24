import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { ParagraphText } from './about.styled';

export const AboutMe = () => {
  return (
    <BlockContainer>
      <BlockHeader>About me</BlockHeader>
      <ParagraphText>
        Deep knowledge of web technologies. Practical experience in creating
        layouts using React(JS/TS), Redux, HTML, CSS and preprocessors. Worked
        with Figma, API requests, react libraries.
        <br /> Always have a strong desire to expand my knowledge, so I don't
        stop studying, watch videos, read articles and apply new knowledge in
        practice. Solid knowledge of English, both speaking and writing.
      </ParagraphText>
    </BlockContainer>
  );
};
