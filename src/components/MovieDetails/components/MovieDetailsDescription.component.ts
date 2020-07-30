import styled from 'styled-components';

const MovieDetailsDescription = styled.p`
  max-width: 73rem;
  font-family: ${({ theme }): string => theme.fonts.openSans};
  font-size: 1.7rem;
  line-height: 2.2rem;
  color: ${({ theme }): string => theme.colors.white};
  opacity: 0.8;
`;

export default MovieDetailsDescription;
