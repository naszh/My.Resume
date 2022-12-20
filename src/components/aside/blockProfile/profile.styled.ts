import styled from 'styled-components';

export const Avatar = styled.img`
	width: 60%;
	border: 3px solid #08e75f;
	border-radius: 50%;
	position: relative;
`;

export const ProfileInfo = styled.div`
	text-align: center;
	padding-top: 20px;
`;

export const HeaderTextOne = styled.h1`
	font-size: 2.5rem;
	text-align: left;
	position: absolute;
	margin: 0;
	top: 10px;
`;

export const HeaderTextTwo = styled.h2`
	font-size: 1.5rem;
	margin: 0;
	position: relative;
	bottom: 20px;
`;

export const Description = styled.p`
	font-size: 1rem;
	margin: -15px 0 40px;
`;

export const LinksList = styled.ul`
	margin: 0;
	padding: 0;
`;

export const LinksListItem = styled.li`
	list-style: none;
	display: inline-block;
	padding: 0 15px;
`;
