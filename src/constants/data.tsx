import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

import {
	ContactLinksType,
	EducationListType,
	ExperienceListType,
	LanguagesListType,
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
		period: 'May, 2022 — now',
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
		period: '2018 - 2022',
		progress: 'kakoyto degree',
		speciality: 'Economic Informatics',
		place: 'BSEU',
	},
];
