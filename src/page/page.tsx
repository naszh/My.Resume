import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AsideInfo } from '../components/aside/asideInfo';
import { AboutMe } from '../components/main/blockAbout/about';
import { MainInfo } from '../components/main/mainInfo';
import { MyPortfolio } from '../components/portfolio/portfolio';
import { PageContainer, SectContainer } from './page.styled';

export const Page = () => {
	return (
		<Router>
			<PageContainer>
				<SectContainer>
					<AsideInfo />
				</SectContainer>
				<SectContainer>
					<AboutMe />
					<Routes>
						<Route path='/' element={<MainInfo />} />
						<Route path='/portfolio' element={<MyPortfolio />} />
					</Routes>
				</SectContainer>
			</PageContainer>
		</Router>
	);
};
