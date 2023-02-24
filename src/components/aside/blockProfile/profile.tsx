import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';

import { contactLinks, myName } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import { BlockContainer, DefaultLink } from '../../common/common.styles';
import {
  Avatar,
  Description,
  HeaderTextTwo,
  LinkPdf,
  LinksList,
  LinksListItem,
  ProfileInfo,
} from './profile.styled';

export const MyProfile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <ProfileInfo>
        <Avatar src='../profile-pic.png' alt={`avatar of ${myName}`} />
        <HeaderTextTwo>{myName}</HeaderTextTwo>
        <Description>&lt;frontend developer /&gt;</Description>
        <LinksList>
          {contactLinks.map((contact, i) => {
            return (
              <LinksListItem key={i}>
                <DefaultLink
                  href={contact.link}
                  target={contact.target}
                  rel='noreferrer'
                >
                  <IconContext.Provider
                    value={{
                      style: {
                        color: theme === 'light' ? '#03766B' : '#57BA98',
                        fontSize: '1.8rem',
                      },
                    }}
                  >
                    {contact.icon}
                  </IconContext.Provider>
                </DefaultLink>
              </LinksListItem>
            );
          })}
        </LinksList>
        <LinkPdf
          href='/FRONTEND_KaskevichAnastasiya_CV.pdf'
          target='_blank'
          theme={theme}
        >
          Click to open in pdf
        </LinkPdf>
      </ProfileInfo>
    </BlockContainer>
  );
};
