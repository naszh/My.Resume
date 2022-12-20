export interface ContactLinksType {
	name: string;
	link: string;
	icon: any;
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
}
