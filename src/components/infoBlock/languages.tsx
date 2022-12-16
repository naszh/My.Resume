import { languagesList } from '../../constants/data';

export const MyLanguages = () => {
	return (
		<div>
			<span>I can speak</span>
			<h3>Languages</h3>
			<div>
				{languagesList.map(skill => {
					return <span>{skill}</span>;
				})}
			</div>
		</div>
	);
};
