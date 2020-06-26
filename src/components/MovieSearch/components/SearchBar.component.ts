import styled from 'styled-components';

const SearchBar = styled.input`
  margin-right: 1.5rem;
  height: 5.7rem;
  max-width: 71.3rem;
  padding: 2.9rem 1.6rem;
  font-size: 2rem;
  color: ${({ theme }): string => theme.colors.white};
  line-height: 2.4rem;
  flex-grow: 1;
  opacity: 0.8;
  border-radius: 0.4rem;
  background-color: ${({ theme }): string => theme.colors.grey};
`;

export default SearchBar;
