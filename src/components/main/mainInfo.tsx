import { AboutMe } from './blockAbout/about';
import { MyEducation } from './blockEducation/education';
import { MyExperience } from './blockExperience/experience';

export const MainInfo = () => {
	return (
		<>
			<AboutMe />
			<MyExperience />
			<MyEducation />
		</>
	);
};
