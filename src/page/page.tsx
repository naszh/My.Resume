import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import { MyInfo, MyLanguages, MyProfile, MySkills } from '../components/aside';
import {
	AboutMe,
	MyEducation,
	MyExperience,
	MyPortfolio,
} from '../components/main';
import { ThemeContext } from '../theme/themeProvider';
import { MaterialUISwitch } from '../switch/switchForTheme';

import { PageContainer, SectContainer } from './page.styled';

export const Page = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<Router>
			<PageContainer>
				<MaterialUISwitch onClick={toggleTheme} />
				<SectContainer>
					<MyProfile />
					<MyInfo />
					<MySkills />
					<MyLanguages />
				</SectContainer>
				<SectContainer>
					<AboutMe />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<MyExperience />
									<MyEducation />
								</>
							}
						/>
						<Route path='/portfolio' element={<MyPortfolio />} />
					</Routes>
				</SectContainer>
			</PageContainer>
		</Router>
	);
};
