import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  gap: 20px;
  margin: 0 120px;
  font-size: 1.1rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 2fr;
    margin: 0 50px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 40px 20px;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
    margin: 40px 10px;
  }
`;

export const SectContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
