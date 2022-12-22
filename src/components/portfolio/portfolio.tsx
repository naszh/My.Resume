import { ProjectsList } from '../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../common/common.styles';
import {
	ContainerPortf,
	GithubButton,
	ProjectBox,
	VercelButton,
} from './portfolio.styled';

export const MyPortfolio = () => {
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
									<ItemWithBorder key={i}>{el}</ItemWithBorder>
								))}
							</ItemsList>
							<a href={project.githubLink}>
								<GithubButton />
							</a>
							{project.deployLink && (
								<a href={project.deployLink}>
									<VercelButton />
								</a>
							)}
						</ProjectBox>
					);
				})}
			</ContainerPortf>
		</BlockContainer>
	);
};
