import { useContext } from 'react';

import { EducationList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
  BlockContainer,
  BlockHeaderSpan,
  BlockHeader,
} from '../../common/common.styles';
import { ContainerEduc, Link, TextEduc } from './education.styled';

export const MyEducation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeaderSpan theme={theme}>
        Where I gained my knowledge
      </BlockHeaderSpan>
      <BlockHeader>Education</BlockHeader>
      {EducationList.map((el, i) => (
        <ContainerEduc key={i}>
          <TextEduc>{el.period}</TextEduc>
          <TextEduc>{el.progress}</TextEduc>
          <TextEduc>{el.speciality}</TextEduc>
          <TextEduc>
            <Link href={el.placeLink} target='_blank' theme={theme}>
              {el.place}
            </Link>
          </TextEduc>
        </ContainerEduc>
      ))}
    </BlockContainer>
  );
};
