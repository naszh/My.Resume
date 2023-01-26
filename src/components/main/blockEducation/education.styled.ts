import { Theme } from '@mui/material';
import styled from 'styled-components';

export const ContainerEduc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const TextEduc = styled.p`
  text-align: justify;
  margin: 0;
  @media (max-width: 1024px) {
    &:first-child {
      display: none;
    }
  }
`;

export const Link = styled.a<{ theme: Theme }>`
  text-decoration: none;
  color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
`;
