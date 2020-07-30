import styled from 'styled-components';

const NotFoundWrapper = styled.section`
  flex-grow: 1;
  text-align: center;
  padding: 15rem 0;
  background-color: ${({ theme }): string => theme.colors.charcoal};
`;

export default NotFoundWrapper;
