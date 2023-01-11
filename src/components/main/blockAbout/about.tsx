import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../../theme/themeProvider';

import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { Line, ParagraphNav, ParagraphText } from './about.styled';

export const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeader>About me</BlockHeader>
      <ParagraphText>
        I’m very motivated and ready to work hard. I study a lot and will
        shortly finish my courses at the TMS school. At the moment I really want
        to get more development experience and I'm ready to consider any
        relevant suggestions. That's why I’m looking for a job or internship as
        a Frontend developer.
      </ParagraphText>
      <Line />
      <ParagraphNav>
        <NavLink
          to='/'
          style={({ isActive }) =>
            isActive
              ? {
                  color: theme === 'light' ? '#03766B' : '#57BA98',
                }
              : { color: 'inherit', textDecoration: 'none' }
          }
        >
          Resume
        </NavLink>
        <NavLink
          to='/portfolio'
          style={({ isActive }) =>
            isActive
              ? {
                  color: theme === 'light' ? '#03766B' : '#57BA98',
                }
              : { color: 'inherit', textDecoration: 'none' }
          }
        >
          Portfolio
        </NavLink>
      </ParagraphNav>
    </BlockContainer>
  );
};
