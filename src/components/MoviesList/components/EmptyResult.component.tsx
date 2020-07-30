import React, { ReactElement } from 'react';
import styled from 'styled-components';

const EmptyResultWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 13rem;
`;

const EmptyResultText = styled.h2`
  display: inline-block;
  font-size: 5.2rem;
  color: ${({ theme }): string => theme.colors.white};
`;

interface EmptyResultProps {
  children: string;
}

const EmptyResult = ({ children }: EmptyResultProps): ReactElement => (
  <EmptyResultWrapper>
    <EmptyResultText>
      {children}
    </EmptyResultText>
  </EmptyResultWrapper>
);

export default EmptyResult;
