import styled from 'styled-components';

const MovieDetailsWrapper = styled.section`
  padding: 4rem 0 8rem;
  background-color: ${({ theme }): string => theme.colors.black};
  opacity: 0.85;
`;

export default MovieDetailsWrapper;
