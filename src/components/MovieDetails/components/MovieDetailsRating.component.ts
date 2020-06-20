import styled from 'styled-components';

const MovieDetailsRating = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border: 0.1rem solid ${({ theme }): string => theme.colors.white};
  border-radius: 50%;
  font-size: 2.6rem;
  line-height: 6.4rem;
  text-align: center;
  color: ${({ theme }): string => theme.colors.green};
`;

export default MovieDetailsRating;
