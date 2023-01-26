import { useContext } from 'react';

import { ProjectsList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
  BlockContainer,
  BlockHeader,
  BlockHeaderSpan,
  ItemsList,
  DefaultLink,
} from '../../common/common.styles';
import {
  Notification,
  ContainerPortf,
  GithubButton,
  Header,
  ProjectBox,
  VercelButton,
  PreviewImg,
  SmallerItemWithBorder,
  TextPortf,
} from './portfolio.styled';

export const MyPortfolio = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockContainer>
      <BlockHeaderSpan theme={theme}>What did I do</BlockHeaderSpan>
      <BlockHeader>Recent Projects</BlockHeader>
      <Notification>
        Soon there will be an instagram project for cats ฅ^•ﻌ•^ฅ which I am
        developing using javascript, typescript, react, redux and backend part.
      </Notification>
      <ContainerPortf>
        {ProjectsList.map((project, i) => {
          return (
            <ProjectBox key={i}>
              <Header>
                {project.title}
                <DefaultLink href={project.githubLink} target='_blank'>
                  <GithubButton
                    style={{
                      color: theme === 'light' ? '#032640' : '#D1CCB9',
                    }}
                  />
                </DefaultLink>
                {project.deployLink && (
                  <DefaultLink href={project.deployLink} target='_blank'>
                    <VercelButton
                      style={{
                        color: theme === 'light' ? '#032640' : '#D1CCB9',
                      }}
                    />
                  </DefaultLink>
                )}
              </Header>
              <PreviewImg src={project.imgSrc} alt='Project preview' />
              <TextPortf>{project.description}</TextPortf>
              <ItemsList>
                {project.stack.map((el, i) => (
                  <SmallerItemWithBorder key={i} theme={theme}>
                    {el}
                  </SmallerItemWithBorder>
                ))}
              </ItemsList>
            </ProjectBox>
          );
        })}
      </ContainerPortf>
    </BlockContainer>
  );
};
