import { Theme } from '@mui/material';
import styled from 'styled-components';

export const Avatar = styled.img`
  width: 75%;
  position: relative;
`;

export const ProfileInfo = styled.div`
  text-align: center;
`;

export const HeaderTextTwo = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 0 0 15px;
`;

export const LinksList = styled.ul`
  margin: 0 0 15px;
  padding: 0;
`;

export const LinksListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 7px;
  &:hover {
    transform: scale(1.3);
  }
`;

export const LinkPdf = styled.a<{ theme: Theme }>`
  color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
`;
