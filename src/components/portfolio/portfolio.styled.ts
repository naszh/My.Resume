import styled from 'styled-components';
import { VscGithub } from 'react-icons/vsc';
import { SiVercel } from 'react-icons/si';

export const ContainerPortf = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
`;

export const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GithubButton = styled(VscGithub)`
	font-size: 2rem;
`;

export const VercelButton = styled(SiVercel)`
	font-size: 2rem;
`;
