import { useContext } from 'react';

import { languagesList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
  BlockContainer,
  BlockHeader,
  BlockHeaderSpan,
  ItemsList,
  ItemWithBorder,
} from '../../common/common.styles';

export const MyLanguages = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeaderSpan theme={theme}>I can speak</BlockHeaderSpan>
      <BlockHeader>Languages</BlockHeader>
      <ItemsList>
        {languagesList.map((skill, i) => {
          return (
            <ItemWithBorder key={i} theme={theme}>
              {skill}
            </ItemWithBorder>
          );
        })}
      </ItemsList>
    </BlockContainer>
  );
};
