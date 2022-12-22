import { ProjectsList } from '../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
} from '../common/common.styles';
import { ContainerPortf, ProjectBox } from './portfolio.styled';

export const MyPortfolio = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>What did I do</BlockHeaderSpan>
			<BlockHeader>Recent Projects</BlockHeader>
			<ContainerPortf>
				{ProjectsList.map((project: any, i: any) => {
					return (
						<ProjectBox key={i}>
							<h4>{project.title}</h4>
							<img
								src={project.imgSrc}
								alt='Project preview'
								style={{ width: '80%' }}
							/>
							<p>{project.description}</p>
							<ul>
								{project.stack.map((el: any, i: any) => (
									<li key={i}>{el}</li>
								))}
							</ul>
							<button>
								<a href={project.githubLink}>github</a>
							</button>
							<button>
								<a href={project.deployLink}>vercel</a>
							</button>
						</ProjectBox>
					);
				})}
			</ContainerPortf>
		</BlockContainer>
	);
};
