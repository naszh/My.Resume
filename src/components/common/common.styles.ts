import { Theme } from '@mui/material';
import styled from 'styled-components';

export const BlockContainer = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 15px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const BlockHeader = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  margin: 0 0 15px;
`;

export const BlockHeaderSpan = styled.span<{ theme: Theme }>`
  position: absolute;
  top: -12px;
  font-style: italic;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#F7F5F0' : '#2C3531'};
  color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

export const ItemWithBorder = styled.span<{ theme: Theme }>`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 4px 6px;
  margin: 3px;
  text-align: center;
  border-color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
  color: ${({ theme }) => (theme === 'light' ? '#03766B' : '#57BA98')};
`;

export const DefaultLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Text = styled.p`
  text-align: justify;
  margin-top: 0;
`;
