import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Num = styled.span`
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.red};
`;

const Units = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5
`;

interface YearDurationProps {
  num: number;
  units: string;
}

const YearDuration: FC<YearDurationProps> = ({ num, units }: YearDurationProps): ReactElement => (
  <div>
    <Num>
      {num}
      {' '}
    </Num>
    <Units>{units}</Units>
  </div>
);

export default YearDuration;
