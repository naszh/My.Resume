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
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/naszh/',
	},
	{
		name: 'Gmail',
		link: 'naszh99@gmail.com',
	},
	{
		name: 'Telegram',
		link: 'https://t.me/naszh9',
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
