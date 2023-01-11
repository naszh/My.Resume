import { Theme } from '@mui/material';
import styled from 'styled-components';

export const ContainerEduc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Link = styled.a<{ theme: Theme }>`
  text-decoration: none;
  color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
`;
