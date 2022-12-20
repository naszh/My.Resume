import {
	BlockContainer,
	BlockHeaderSpan,
	BlockHeader,
	BlockInfo,
} from '../../common/common.styles';
import { ContainerEduc } from './education.styled';

export const MyEducation = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Where I gained my knowledge</BlockHeaderSpan>
			<BlockHeader>Education and courses</BlockHeader>
			<ContainerEduc>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
			</ContainerEduc>
		</BlockContainer>
	);
};
