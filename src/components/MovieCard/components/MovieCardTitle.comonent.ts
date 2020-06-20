import styled from 'styled-components';

const MovieCardTitle = styled.h3`
  flex-grow: 1;
  font-size: 1.8rem;
  line-height: 2.2rem;
  opacity: 0.7;
  text-align: left;
  color: ${({ theme }): string => theme.colors.white};
`;

export default MovieCardTitle;
