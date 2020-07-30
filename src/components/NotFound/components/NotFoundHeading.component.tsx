import styled from 'styled-components';

const NotFoundHeading = styled.h2`
  margin: 0 auto;
  font-size: 5.2rem;
  color: ${({ theme }): string => theme.colors.white};
  opacity: 0.8;
`;

export default NotFoundHeading;
