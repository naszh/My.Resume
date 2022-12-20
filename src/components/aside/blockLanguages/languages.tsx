import { languagesList } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	BlockInfo,
	Item,
} from '../../common/common.styles';

export const MyLanguages = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>I can speak</BlockHeaderSpan>
			<BlockHeader>Languages</BlockHeader>
			<BlockInfo>
				{languagesList.map((skill, i) => {
					return <Item key={i}>{skill}</Item>;
				})}
			</BlockInfo>
		</BlockContainer>
	);
};
