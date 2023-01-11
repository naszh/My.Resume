import { location } from '../../../constants/data';

import { BlockContainer, BlockHeader } from '../../common/common.styles';
import { Info, InfoContainer } from './information.styled';

export const MyInfo = () => {
  return (
    <BlockContainer>
      <BlockHeader>Information</BlockHeader>
      <InfoContainer>
        <Info>Location</Info>
        <Info>{location}</Info>
      </InfoContainer>
    </BlockContainer>
  );
};
