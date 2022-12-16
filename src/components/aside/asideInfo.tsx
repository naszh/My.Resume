import { MyInfo } from './blockInfo/information';
import { MyLanguages } from './blockLanguages/languages';
import { MyProfile } from './blockProfile/profile';
import { MySkills } from './blockSkills/skills';

export const AsideInfo = () => {
	return (
		<>
			<MyProfile />
			<MyInfo />
			<MySkills />
			<MyLanguages />
		</>
	);
};
