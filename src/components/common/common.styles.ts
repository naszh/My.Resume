import styled from 'styled-components';

export const BlockContainer = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	padding: 15px;
	position: relative;
`;

export const BlockHeader = styled.h3`
	text-align: center;
	margin: 0 0 15px;
`;

export const BlockHeaderSpan = styled.span`
	position: absolute;
	top: 0;
`;

export const ItemsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
	padding: 0;
`;

export const ItemWithBorder = styled.span`
	border: 1px solid black;
	border-radius: 15px;
	padding: 5px;
	margin: 3px;
`;
