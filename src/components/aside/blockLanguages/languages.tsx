import { useContext } from 'react';
import { languagesList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../../common/common.styles';

export const MyLanguages = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BlockContainer>
			<BlockHeaderSpan>I can speak</BlockHeaderSpan>
			<BlockHeader>Languages</BlockHeader>
			<ItemsList>
				{languagesList.map((skill, i) => {
					return (
						<ItemWithBorder
							key={i}
							style={{
								color: theme === 'light' ? '#03766B' : '#57BA98',
								borderColor: theme === 'light' ? '#03766B' : '#57BA98',
							}}
						>
							{skill}
						</ItemWithBorder>
					);
				})}
			</ItemsList>
		</BlockContainer>
	);
};
