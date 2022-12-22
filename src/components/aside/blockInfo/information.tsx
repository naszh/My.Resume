import { location } from '../../../constants/data';
import { BlockContainer, BlockHeader } from '../../common/common.styles';

export const MyInfo = () => {
	return (
		<BlockContainer>
			<BlockHeader>Information</BlockHeader>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<p>Location</p>
				<p>{location}</p>
			</div>
		</BlockContainer>
	);
};
