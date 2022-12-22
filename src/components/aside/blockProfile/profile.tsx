import { IconContext } from 'react-icons/lib';
import { contactLinks, myName } from '../../../constants/data';
import { BlockContainer } from '../../common/common.styles';
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
		<BlockContainer>
			<ProfileInfo>
				<Avatar src='../profile-pic.png' alt={`avatar of ${myName}`} />
				<HeaderTextOne>Hello, I'm</HeaderTextOne>
				<HeaderTextTwo>{myName}</HeaderTextTwo>
				<Description>&lt;frontend developer /&gt;</Description>
				<LinksList>
					{contactLinks.map((contact, i) => {
						return (
							<LinksListItem key={i}>
								<a href={`${contact.link}`} target='_blank' rel='noreferrer'>
									<IconContext.Provider
										value={{
											style: {
												color: '#000',
												fontSize: '1.8rem',
											},
										}}
									>
										{contact.icon}
									</IconContext.Provider>
								</a>
							</LinksListItem>
						);
					})}
				</LinksList>
			</ProfileInfo>
		</BlockContainer>
	);
};
