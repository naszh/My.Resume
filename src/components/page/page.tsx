import { AsideInfo } from '../aside/asideInfo';
import { PageContainer, SectContainer } from './page.styled';

export const Page = () => {
	return (
		<PageContainer>
			<SectContainer>
				<AsideInfo />
			</SectContainer>
			<SectContainer></SectContainer>
		</PageContainer>
	);
};
