import { useContext } from 'react';

import { ExperienceList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
  BlockContainer,
  BlockHeaderSpan,
  BlockHeader,
  Text,
} from '../../common/common.styles';
import { Line } from '../blockAbout/about.styled';
import {
  ContainerExp,
  ListExp,
  ListItemExp,
  Wrapper,
} from './experience.styled';

export const MyExperience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeaderSpan theme={theme}>Where I worked</BlockHeaderSpan>
      <BlockHeader>Experience</BlockHeader>
      <Wrapper>
        {ExperienceList.map((el, i) => (
          <ContainerExp key={i}>
            <div>
              <Text>{el.period}</Text>
              <Line style={{ width: '25%' }} />
              <Text>{el.organization}</Text>
            </div>
            <div>
              <Text>{el.position}</Text>
              <ListExp>
                {el.duties.map((duty, i) => (
                  <ListItemExp key={i}>{duty}</ListItemExp>
                ))}
              </ListExp>
            </div>
          </ContainerExp>
        ))}
      </Wrapper>
    </BlockContainer>
  );
};
