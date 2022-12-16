import { MyInfo } from '../infoBlock/information';
import { MyLanguages } from '../infoBlock/languages';
import { MySkills } from '../infoBlock/skills';
import { MyProfile } from './profile/profile';

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
