import styled from 'styled-components';

const SearchHeading = styled.h2`
  height: 4.9rem;
  width: 39.5rem;
  margin-bottom: 3.8rem;
  color: ${({ theme }): string => theme.colors.white};
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 0.1rem;
  line-height: 4.9rem;
  text-align: center;
`;

export default SearchHeading;
