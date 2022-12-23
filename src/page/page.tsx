import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MyInfo, MyLanguages, MyProfile, MySkills } from '../components/aside';
import {
	AboutMe,
	MyEducation,
	MyExperience,
	MyPortfolio,
} from '../components/main';
import { PageContainer, SectContainer } from './page.styled';

export const Page = () => {
	return (
		<Router>
			<PageContainer>
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
