import styled from 'styled-components';

const MovieDetailsTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 5.2rem;
  line-height: 6.3rem;
  color: ${({ theme }): string => theme.colors.white};
  opacity: 0.8;
`;

export default MovieDetailsTitle;
