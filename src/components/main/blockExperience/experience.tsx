import { ExperienceList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeaderSpan,
	BlockHeader,
} from '../../common/common.styles';
import { Line } from '../blockAbout/about.styled';
import { ContainerExp, ListExp } from './experience.styled';

export const MyExperience = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Where I worked</BlockHeaderSpan>
			<BlockHeader>Experience</BlockHeader>
			{ExperienceList.map((el, i) => (
				<ContainerExp key={i}>
					<div>
						<p>{el.period}</p>
						<Line style={{ width: '25%' }} />
						<p>{el.organization}</p>
					</div>
					<div>
						<p>{el.position}</p>
						<ul>
							{el.duties.map((duty, i) => (
								<ListExp key={i}>{duty}</ListExp>
							))}
						</ul>
					</div>
				</ContainerExp>
			))}
		</BlockContainer>
	);
};

//</div>
// ))}
// {ExperienceList.map((el, i) => (
// <div key={i}>
