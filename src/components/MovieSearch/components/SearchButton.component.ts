import styled from 'styled-components';

const SearchButton = styled.button`
  height: 5.7rem;
  width: 23.3rem;
  padding: 1.8rem 7.3rem;
  font-size: 2rem;
  border-radius: 4px;
  background-color: ${({ theme }): string => theme.colors.red};
  color: ${({ theme }): string => theme.colors.white};
`;

export default SearchButton;
