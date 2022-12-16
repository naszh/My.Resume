import { contactLinks, myName } from '../../../constants/data';
import {
	Avatar,
	Description,
	HeaderTextOne,
	HeaderTextTwo,
	LinksList,
	LinksListItem,
	ProfileInfo,
} from './profile.styled';

export const MyProfile = () => {
	return (
		<ProfileInfo>
			<Avatar src='../profile-pic.png' alt={`avatar of ${myName}`} />
			<HeaderTextOne>Hello, I'm</HeaderTextOne>
			<HeaderTextTwo>{myName}</HeaderTextTwo>
			<Description>&lt;frontend developer /&gt;</Description>
			<LinksList>
				{contactLinks.map(contact => {
					return (
						<LinksListItem key={contact.name}>
							{ReactHtmlParser(contact.icon)}
							<a href={`${contact.link}`}>{contact.name}</a>
						</LinksListItem>
					);
				})}
			</LinksList>
		</ProfileInfo>
	);
};
