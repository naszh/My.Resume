import { useContext } from 'react';
import { ProjectsList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../../common/common.styles';
import {
	ContainerPortf,
	GithubButton,
	ProjectBox,
	VercelButton,
} from './portfolio.styled';

export const MyPortfolio = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BlockContainer>
			<BlockHeaderSpan>What did I do</BlockHeaderSpan>
			<BlockHeader>Recent Projects</BlockHeader>
			<ContainerPortf>
				{ProjectsList.map((project, i) => {
					return (
						<ProjectBox key={i}>
							<h4>{project.title}</h4>
							<img
								src={project.imgSrc}
								alt='Project preview'
								style={{ width: '80%' }}
							/>
							<p>{project.description}</p>
							<ItemsList>
								{project.stack.map((el, i) => (
									<ItemWithBorder
										key={i}
										style={{
											color: theme === 'light' ? '#03766B' : '#57BA98',
											borderColor: theme === 'light' ? '#03766B' : '#57BA98',
										}}
									>
										{el}
									</ItemWithBorder>
								))}
							</ItemsList>
							<a href={project.githubLink}>
								<GithubButton
									style={{
										color: theme === 'light' ? '#034640' : '#D1CCB9',
									}}
								/>
							</a>
							{project.deployLink && (
								<a href={project.deployLink}>
									<VercelButton
										style={{
											color: theme === 'light' ? '#034640' : '#D1CCB9',
										}}
									/>
								</a>
							)}
						</ProjectBox>
					);
				})}
			</ContainerPortf>
		</BlockContainer>
	);
};
