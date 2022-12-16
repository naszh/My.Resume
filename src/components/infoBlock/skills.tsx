import { skillsList } from '../../constants/data';

export const MySkills = () => {
	return (
		<div>
			<span>Why hire me</span>
			<h3>Skills</h3>
			<div>
				{skillsList.map(skill => {
					return <span>{skill}</span>;
				})}
			</div>
		</div>
	);
};
