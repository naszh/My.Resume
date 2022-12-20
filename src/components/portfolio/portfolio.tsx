import {
	BlockContainer,
	BlockHeader,
	BlockHeaderSpan,
} from '../common/common.styles';
import { ContainerPortf, ProjectBox } from './portfolio.styled';

export const MyPortfolio = () => {
	return (
		<BlockContainer>
			<BlockHeaderSpan>What did I do</BlockHeaderSpan>
			<BlockHeader>Recent Projects</BlockHeader>
			<ContainerPortf>
				<ProjectBox>
					<div>1</div>
					<div>1</div>
					<div>1</div>
				</ProjectBox>
			</ContainerPortf>
		</BlockContainer>
	);
};
