import styled from 'styled-components';

const MovieCardDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  opacity: 0.5;
  color: ${({ theme }): string => theme.colors.white};
`;

export default MovieCardDescription;
