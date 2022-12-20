import { skillsList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	BlockInfo,
	Item,
} from '../../common/common.styles';

export const MySkills = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Why hire me</BlockHeaderSpan>
			<BlockHeader>Skills</BlockHeader>
			<BlockInfo>
				{skillsList.map((skill, i) => {
					return <Item key={i}>{skill}</Item>;
				})}
			</BlockInfo>
		</BlockContainer>
	);
};
