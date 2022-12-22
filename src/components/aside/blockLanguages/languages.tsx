import { languagesList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../../common/common.styles';

export const MyLanguages = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>I can speak</BlockHeaderSpan>
			<BlockHeader>Languages</BlockHeader>
			<ItemsList>
				{languagesList.map((skill, i) => {
					return <ItemWithBorder key={i}>{skill}</ItemWithBorder>;
				})}
			</ItemsList>
		</BlockContainer>
	);
};
