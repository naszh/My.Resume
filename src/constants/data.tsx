import { FiGithub, FiLinkedin, FiMail, FiPhoneIncoming } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

import { DefaultLink } from '../components/common/common.styles';
import {
  ContactLinksType,
  EducationListType,
  ExperienceListType,
  LanguagesListType,
  ProjectsListType,
  SkillsListType,
} from './data.types';

export const myName: string = 'Anastasiya Kaskevich';
export const location: string = 'Minsk, Belarus';

export const contactLinks: Array<ContactLinksType> = [
  {
    name: 'GitHub',
    link: 'https://github.com/naszh',
    target: '_blank',
    icon: <FiGithub />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/naszh/',
    target: '_blank',
    icon: <FiLinkedin />,
  },
  {
    name: 'Gmail',
    link: 'mailto: naszh99@gmail.com',
    icon: <FiMail />,
  },
  {
    name: 'Telegram',
    link: 'https://t.me/naszh9',
    target: '_blank',
    icon: <TbBrandTelegram />,
  },
  {
    name: 'Phone',
    link: 'tel:+375298198149',
    icon: <FiPhoneIncoming />,
  },
];

export const skillsList: SkillsListType = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Redux thunk',
  'Material UI',
  'Axios',
  'Postman',
  'Git',
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
  'Adaptive layout',
  'GitHub',
  'Figma',
  'Parcel',
  'Webpack',
  'BEM',
  'DRY',
  'KISS',
  'YAGNI',
  'SOLID',
  'MySQL',
];

export const languagesList: LanguagesListType = [
  <DefaultLink href='https://www.efset.org/cert/zh7ny2' target='_blank'>
    English – click to view certificate EF SET
  </DefaultLink>,
  'Russian',
  'Belarusian',
];

export const ExperienceList: Array<ExperienceListType> = [
  {
    organization: 'National Statistical Committee of the Republic of Belarus',
    period: 'May, 2022 – now',
    position: 'HTML developer',
    duties: [
      'maintaining and editing pages using html/css',
      'fixing website bugs to improve the user experience',
      'providing technical support to users regarding the use of the site',
    ],
  },
];

export const EducationList: Array<EducationListType> = [
  {
    period: 'Dec, 2022 – now',
    progress: 'In progress',
    speciality: 'JavaScript/ Frontend',
    place: 'Rolling Scopes School',
    placeLink: 'https://rs.school/js/',
  },
  {
    period: 'Jun, 2022 – now',
    progress: 'In progress',
    speciality: 'Frontend Development',
    place: 'TeachMeSkills',
    placeLink:
      'https://teachmeskills.by/kursy-programmirovaniya/frontend-html-css-javascript-minsk',
  },
  {
    period: '2018 – 2022',
    progress: `Bachelor's degree`,
    speciality: 'Economic Informatics',
    place: 'Belarus State Economic University',
    placeLink: 'https://digitale.by/ecinf/',
  },
];

export const ProjectsList: Array<ProjectsListType> = [
  {
    title: 'Training project to learn typescript, react, redux',
    imgSrc: '../../../projectStudy.png',
    description: `This project was used to learn react, redux and typescript. The styled-components, material UI, axios, react-spinners, react-router-dom, react-icons libraries were used. Description in the README.`,
    stack: ['JavaScript', 'TypeScript', 'React', 'Redux'],
    githubLink: 'https://github.com/naszh/react-redux-for-practice',
    deployLink: 'https://react-redux-for-practice.vercel.app/',
  },
  {
    title: 'NBRB',
    imgSrc: '../../../projectNBRB.png',
    description:
      'A project using the API of the National Bank of the Republic of Belarus. The values of some currencies for today are displayed. It is also possible to choose any currency that has ever existed in Belarus and display a chart of exchange rates for any period of time.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/naszh/NBRB-API',
    deployLink: 'http://nbrb-phi.vercel.app/',
  },
  {
    title: 'Pokemons',
    imgSrc: '../../../projectPokemonPage.png',
    description:
      'List of Pokemon (with pagination) and detailed information on each Pokemon based on the PokeAPI.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/naszh/PokeAPI',
    deployLink: 'http://pokemon-naszh.vercel.app/',
  },
  {
    title: 'More works',
    imgSrc: '../../../githubPage.png',
    description: 'My github page with other pojects.',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux'],
    githubLink: 'https://github.com/naszh',
  },
];
