import styled from 'styled-components';

const MoviesListWrapper = styled.section`
  flex-grow: 1;
  padding: 7rem 0;
  background-color: ${({ theme }): string => theme.colors.charcoal};
`;

export default MoviesListWrapper;
