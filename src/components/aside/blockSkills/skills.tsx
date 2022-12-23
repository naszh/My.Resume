import { useContext } from 'react';
import { skillsList } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';
import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
	ItemsList,
	ItemWithBorder,
} from '../../common/common.styles';

export const MySkills = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BlockContainer>
			<BlockHeaderSpan>Why hire me</BlockHeaderSpan>
			<BlockHeader>Skills</BlockHeader>
			<ItemsList>
				{skillsList.map((skill, i) => {
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
