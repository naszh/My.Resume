import { useContext } from 'react';

import { EducationList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
  BlockContainer,
  BlockHeaderSpan,
  BlockHeader,
  Text,
} from '../../common/common.styles';
import { ContainerEduc, Link } from './education.styled';

export const MyEducation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeaderSpan theme={theme}>
        Where I gained my knowledge
      </BlockHeaderSpan>
      <BlockHeader>Education and courses</BlockHeader>
      {EducationList.map((el, i) => (
        <ContainerEduc key={i}>
          <Text>{el.period}</Text>
          <Text>{el.progress}</Text>
          <Text>{el.speciality}</Text>
          <Text>
            <Link href={el.placeLink} target='_blank' theme={theme}>
              {el.place}
            </Link>
          </Text>
        </ContainerEduc>
      ))}
    </BlockContainer>
  );
};
