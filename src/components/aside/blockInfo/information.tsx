import { location } from '../../../constants/data';
import {
	BlockContainer,
	BlockHeader,
	BlockInfo,
} from '../../common/common.styles';

export const MyInfo = () => {
	return (
		<BlockContainer>
			<BlockHeader>Information</BlockHeader>
			<BlockInfo>
				<span>Location</span>
				<span>{location}</span>
			</BlockInfo>
		</BlockContainer>
	);
};
