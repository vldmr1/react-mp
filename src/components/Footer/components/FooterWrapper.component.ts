import styled from 'styled-components';

const FooterWrapper = styled.footer`
  max-width: 120rem;
  height: 7rem;
  padding-top: 2rem;
  background-color: ${({ theme }): string => theme.colors.grey};
  text-align: center;
`;

export default FooterWrapper;
