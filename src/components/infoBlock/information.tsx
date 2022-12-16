import { location } from '../../constants/data';

export const MyInfo = () => {
	return (
		<div>
			<h3>Information</h3>
			<p>
				<span>Location</span>
				<span>{location}</span>
			</p>
		</div>
	);
};
