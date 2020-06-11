import styled from 'styled-components';

const MovieCardYear = styled.div`
  height: 2.6rem;
  width: 6.6rem;
  padding-top: 0.35rem;
  border: 0.1rem solid #979797;
  opacity: 0.5;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: ${({ theme }): string => theme.colors.white};
`;

export default MovieCardYear;
