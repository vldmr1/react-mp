import styled from 'styled-components';

const MovieDetailsGenre = styled.p`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${({ theme }): string => theme.colors.white};
  opacity: 0.7;
`;

export default MovieDetailsGenre;
