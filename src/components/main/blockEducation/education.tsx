import { EducationList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeaderSpan,
	BlockHeader,
} from '../../common/common.styles';
import { ContainerEduc } from './education.styled';

export const MyEducation = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Where I gained my knowledge</BlockHeaderSpan>
			<BlockHeader>Education and courses</BlockHeader>
			{EducationList.map((el, i) => (
				<ContainerEduc key={i}>
					<p>{el.period}</p>
					<p>{el.progress}</p>
					<p>{el.speciality}</p>
					<p>
						<a href={el.placeLink}>{el.place}</a>
					</p>
				</ContainerEduc>
			))}
		</BlockContainer>
	);
};
