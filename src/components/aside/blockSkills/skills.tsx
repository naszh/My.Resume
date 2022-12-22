import { skillsList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../../common/common.styles';

export const MySkills = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>Why hire me</BlockHeaderSpan>
			<BlockHeader>Skills</BlockHeader>
			<ItemsList>
				{skillsList.map((skill, i) => {
					return <ItemWithBorder key={i}>{skill}</ItemWithBorder>;
				})}
			</ItemsList>
		</BlockContainer>
	);
};
