import styled from 'styled-components';

const MovieDetailsWrapper = styled.section`
  padding: 3rem 0 5rem;
  background-color: ${({ theme }): string => theme.colors.overlayBlack};
`;

export default MovieDetailsWrapper;
