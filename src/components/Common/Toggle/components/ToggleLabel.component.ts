import styled from 'styled-components';

const SwitchLabel = styled.label`
  display: inline-block;
  height: 3.5rem;
  padding: 0.9rem 2rem;
  background-color: ${({ theme }):string => theme.colors.grey};
  color: ${({ theme }):string => theme.colors.white};
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;

  &:first-of-type {
    border-radius: 0.4rem 0 0 0.4rem;
  }

  &:last-of-type {
    border-radius: 0 0.4rem 0.4rem 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SwitchLabel;
