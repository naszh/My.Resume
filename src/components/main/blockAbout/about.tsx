import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../theme/themeProvider';
import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { Line, ParagraphNav, ParagraphText } from './about.styled';

export const AboutMe = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BlockContainer>
			<BlockHeader>About me</BlockHeader>
			<ParagraphText>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
				cumque similique nisi natus quidem autem eos maxime minima inventore
				sequi, nobis quia! Architecto laudantium consequatur necessitatibus
				incidunt maxime, unde quos! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Ullam quaerat consectetur nisi aperiam excepturi
				laborum delectus veniam, asperiores modi labore nesciunt ipsum
				temporibus voluptas illo. Tempore veniam minima voluptates quia. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit saepe
				cumque ex temporibus quam quia vero quas dolor expedita, reprehenderit,
				dolores repellat. Necessitatibus similique, ullam quo doloribus facilis
				doloremque?
			</ParagraphText>
			<Line />
			<ParagraphNav>
				<NavLink
					to='/'
					style={({ isActive }) =>
						isActive
							? { color: theme === 'light' ? '#03766B' : '#57BA98' }
							: { color: 'inherit' }
					}
				>
					Resume
				</NavLink>
				<NavLink
					to='/portfolio'
					style={({ isActive }) =>
						isActive
							? { color: theme === 'light' ? '#03766B' : '#57BA98' }
							: { color: 'inherit' }
					}
				>
					Portfolio
				</NavLink>
			</ParagraphNav>
		</BlockContainer>
	);
};
