import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { ParagraphText } from './about.styled';

export const AboutMe = () => {
  return (
    <BlockContainer>
      <BlockHeader>About me</BlockHeader>
      <ParagraphText>
        My stack: React, Redux, JavaScript/ TypeScript.
        <br />I have a strong desire to expand my knowledge and I'm currently
        developing a new project with backend.
        <br />
        Open to your suggections.
      </ParagraphText>
    </BlockContainer>
  );
};
