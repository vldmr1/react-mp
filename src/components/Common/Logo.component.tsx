import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const BoldText = styled.span`
  font-weight: 900;
`;

const RegularText = styled.span`
  font-weight: 400;
`;

const LogoContainer = styled.p`
  display: inline-block;
  height: 2.4rem;
  width: 15.1rem;
  color: ${({ theme }): string => theme.colors.red};
  font-size: 2rem;
  letter-spacing: 0;
  line-height: 2.4rem;
`;

const Logo: FC = (): ReactElement => (
  <LogoContainer>
    <BoldText>netflix</BoldText>
    <RegularText>roulette</RegularText>
  </LogoContainer>
);

export default Logo;
