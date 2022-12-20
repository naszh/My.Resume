import { AsideInfo } from '../aside/asideInfo';
import { MainInfo } from '../main/mainInfo';
import { PageContainer, SectContainer } from './page.styled';

export const Page = () => {
	return (
		<PageContainer>
			<SectContainer>
				<AsideInfo />
			</SectContainer>
			<SectContainer>
				<MainInfo />
			</SectContainer>
		</PageContainer>
	);
};
