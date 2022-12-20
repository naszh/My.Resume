import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { Line, ParagraphNav, ParagraphText } from './about.styled';

export const AboutMe = () => {
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
				<button>
					<a>CV</a>
				</button>
				<button>
					<a>Portfolio</a>
				</button>
			</ParagraphNav>
		</BlockContainer>
	);
};
