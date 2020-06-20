import styled from 'styled-components';

const ControlBarMessage = styled.p`
  padding-top: 0.7rem;
  color: ${({ theme }): string => theme.colors.white};
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0;
`;

export default ControlBarMessage;
