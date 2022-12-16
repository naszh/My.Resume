import { FiGithub } from 'react-icons/fi';

import {
	ContactLinksType,
	LanguagesListType,
	SkillsListType,
} from './data.types';

export const myName: string = 'Anastasiya Kaskevich';
export const location: string = 'Minsk, Belarus';

export const contactLinks: Array<ContactLinksType> = [
	{
		name: 'GitHub',
		link: 'https://github.com/naszh',

		icon: '<FiGithub />',
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/naszh/',
		icon: '<FiGithub />',
	},
	{
		name: 'Gmail',
		link: 'naszh99@gmail.com',
		icon: '<FiGithub />',
	},
	{
		name: 'Telegram',
		link: 'https://t.me/naszh9',
		icon: ' <FiGithub />',
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
