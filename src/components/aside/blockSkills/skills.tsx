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
			<BlockHeaderSpan theme={theme}>Why hire me</BlockHeaderSpan>
			<BlockHeader>Skills</BlockHeader>
			<ItemsList>
				{skillsList.map((skill, i) => {
					return (
						<ItemWithBorder key={i} theme={theme}>
							{skill}
						</ItemWithBorder>
					);
				})}
			</ItemsList>
		</BlockContainer>
	);
};
