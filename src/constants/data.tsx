import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

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
		icon: <FiGithub />,
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/naszh/',
		icon: <FiLinkedin />,
	},
	{
		name: 'Gmail',
		link: 'naszh99@gmail.com',
		icon: <FiMail />,
	},
	{
		name: 'Telegram',
		link: 'https://t.me/naszh9',
		icon: <TbBrandTelegram />,
	},
];

export const skillsList: SkillsListType = [
	'HTML',
	'CSS',
	'SASS',
	'Adaptive layout',
	'BEM',
	'Bootstrap',
	'Git',
	'JavaScript',
	'TypeScript',
	'React',
	'Redux',
	'Parcel bundler',
	'MySQL',
];

export const languagesList: LanguagesListType = [
	'Russian',
	'Belarusian',
	'English',
];

export const ExperienceList: Array<ExperienceListType> = [
	{
		organization: 'National Statistical Committee of the Republic of Belarus',
		period: 'May, 2022 – now',
		position: 'Editor of Internet resource',
		duties: [
			'ensuring the operability and maintenance of Internet sites',
			'technical editing (html layout)',
			'administration of official accounts in social networks',
		],
	},
];

export const EducationList: Array<EducationListType> = [
	{
		period: 'December, 2022 – now',
		progress: 'In progress',
		speciality: 'JavaScript / Front-end',
		place: 'Rolling Scopes School',
		placeLink: '',
	},
	{
		period: 'June, 2022 – now',
		progress: 'In progress',
		speciality: 'Frontend Development',
		place: 'TeachMeSkills',
		placeLink: '',
	},
	{
		period: '2018 – 2022',
		progress: `Bachelor's degree`,
		speciality: 'Economic Informatics',
		place: 'Belarus State Economic University (BSEU)',
		placeLink: '',
	},
];

export const ProjectsList: Array<ProjectsListType> = [
	{
		title: 'Resume',
		imgSrc: '../../../projectResume.png',
		description: 'My resume for job hunting',
		stack: [],
		githubLink: 'https://github.com/naszh',
		deployLink: '',
	},
	{
		title: 'NBRB',
		imgSrc: '../../../projectNBRB.png',
		description:
			'Using the API of the National Bank of the Republic of Belarus. The rates of some currencies for today are displayed. The choice of any currency that has ever existed in the Republic of Belarus has been implemented for any time period with the output of a chart of dynamics and exchange rates.',
		stack: ['HTML', 'CSS', 'JavaScript', 'NBRB API', 'HighCharts'],
		githubLink: '',
		deployLink: '',
	},
	{
		title: 'Pokemons',
		imgSrc: '../../../projectPokemonPage.png',
		description:
			'List of Pokemon (with pagination) and detailed information on each Pokemon based on the PokeAPI.',
		stack: ['HTML', 'CSS', 'JavaScript', 'PokeApi'],
		githubLink: '',
		deployLink: '',
	},
	{
		title: 'More works',
		imgSrc: '',
		description: '',
		stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux'],
		githubLink: '',
	},
];
