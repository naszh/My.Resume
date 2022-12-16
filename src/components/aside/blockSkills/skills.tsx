import { skillsList } from '../../../constants/data';

export const MySkills = () => {
	return (
		<div>
			<span>Why hire me</span>
			<h3>Skills</h3>
			<div>
				{skillsList.map((skill, i) => {
					return <span key={i}>{skill}</span>;
				})}
			</div>
		</div>
	);
};
