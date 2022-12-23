import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';
import { contactLinks, myName } from '../../../constants/data';
import { ThemeContext } from '../../../theme/themeProvider';
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
	const { theme } = useContext(ThemeContext);
	return (
		<BlockContainer>
			<ProfileInfo>
				<Avatar src='../profile-pic.png' alt={`avatar of ${myName}`} />
				<HeaderTextOne
					style={{
						color: theme === 'light' ? '#03766B' : '#57BA98',
					}}
				>
					Hello, I'm
				</HeaderTextOne>
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
												color: theme === 'light' ? '#03766B' : '#57BA98',
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
