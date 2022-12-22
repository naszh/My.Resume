import { ReactNode } from 'react';

export interface ContactLinksType {
	name: string;
	link: string;
	icon: ReactNode;
}

export type SkillsListType = Array<string>;
export type LanguagesListType = Array<string>;

export interface ExperienceListType {
	organization: string;
	period: string;
	position: string;
	duties: Array<string>;
}

export interface EducationListType {
	period: string;
	progress: string;
	speciality: string;
	place: string;
	placeLink: string;
}

export interface ProjectsListType {
	title: string;
	imgSrc: string;
	description: string;
	stack: Array<string>;
	githubLink: string;
	deployLink?: string;
}
