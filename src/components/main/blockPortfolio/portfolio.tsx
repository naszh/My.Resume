import { useContext } from 'react';

import { ProjectsList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';

import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	DefaultLink,
	Text,
} from '../../common/common.styles';
import {
	ContainerPortf,
	GithubButton,
	Header,
	ProjectBox,
	VercelButton,
	PreviewImg,
	SmallerItemWithBorder,
} from './portfolio.styled';

export const MyPortfolio = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BlockContainer>
			<BlockHeaderSpan theme={theme}>What did I do</BlockHeaderSpan>
			<BlockHeader>Recent Projects</BlockHeader>
			<ContainerPortf>
				{ProjectsList.map((project, i) => {
					return (
						<ProjectBox key={i}>
							<Header>
								{project.title}
								<DefaultLink href={project.githubLink} target='_blank'>
									<GithubButton
										style={{
											color: theme === 'light' ? '#034640' : '#D1CCB9',
										}}
									/>
								</DefaultLink>
								{project.deployLink && (
									<DefaultLink href={project.deployLink} target='_blank'>
										<VercelButton
											style={{
												color: theme === 'light' ? '#034640' : '#D1CCB9',
											}}
										/>
									</DefaultLink>
								)}
							</Header>
							<PreviewImg src={project.imgSrc} alt='Project preview' />
							<Text>{project.description}</Text>
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
