import { contactLinks, myName } from '../../../constants/data';

export const MyProfile = () => {
	return (
		<div>
			<img src='../profile-pic.png' alt={`${myName}`} />
			<h1>Hello, I'm</h1>
			<h2>{myName}</h2>
			<p>frontend developer</p>
			<ul>
				{contactLinks.map(contact => {
					return (
						<li key={contact.name}>
							<a href={`${contact.link}`}>{contact.name}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
