import styled from 'styled-components';
import { VscGithub } from 'react-icons/vsc';
import { SiVercel } from 'react-icons/si';
import { BlockContainer, ItemWithBorder } from '../../common/common.styles';

export const Notification = styled.p`
  text-align: justify;
`;

export const ContainerPortf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectBox = styled(BlockContainer)`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h4`
  text-align: center;
  font-size: 1.3rem;
  margin: 0;
`;

export const PreviewImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 5px 0;
`;

export const TextPortf = styled.p`
  text-align: justify;
  margin: 0;
`;

export const GithubButton = styled(VscGithub)`
  font-size: 1.6rem;
  vertical-align: middle;
  margin: 5px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const VercelButton = styled(SiVercel)`
  font-size: 1.6rem;
  vertical-align: middle;
  margin: 5px;
  &:hover {
    transform: scale(1.3);
  }
`;

export const SmallerItemWithBorder = styled(ItemWithBorder)`
  font-size: 0.9rem;
  border-style: dotted;
  padding: 4px;
  margin: 2px;
`;
