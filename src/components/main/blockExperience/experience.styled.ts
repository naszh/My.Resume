import styled from 'styled-components';

export const ContainerExp = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5%;
`;

export const ListExp = styled.ul`
  padding: 0;
  margin-bottom: 0;
`;

export const ListItemExp = styled.li`
  text-align: justify;
  list-style-type: '> ';
  list-style-position: inside;
`;
