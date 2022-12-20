import { ExperienceList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeaderSpan,
	BlockHeader,
	BlockInfo,
} from '../../common/common.styles';
import { Line } from '../blockAbout/about.styled';
import { ContainerExp, ListExp } from './experience.styled';

export const MyExperience = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Where I worked</BlockHeaderSpan>
			<BlockHeader>Experience</BlockHeader>
			<ContainerExp>
				<div>
					{ExperienceList.map(el => (
						<>
							<p>{el.period}</p>
							<Line style={{ width: '25%' }} />
							<p>{el.organization}</p>
						</>
					))}
				</div>
				<div>
					{ExperienceList.map(el => (
						<>
							<p>{el.position}</p>
							{el.duties.map(duty => (
								<ListExp>{duty}</ListExp>
							))}
						</>
					))}
				</div>
			</ContainerExp>
		</BlockContainer>
	);
};
