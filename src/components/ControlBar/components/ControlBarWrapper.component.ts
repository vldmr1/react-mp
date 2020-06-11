import styled from 'styled-components';

const ControlBarWrapper = styled.section`
  height: 7rem;
  padding: 1.7rem 6rem;
  background-color: ${({ theme }): string => theme.colors.lightGrey}
`;

export default ControlBarWrapper;
