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
        <MyExperience />
        <MyEducation />
        <MyPortfolio />
      </SectContainer>
    </PageContainer>
  );
};
