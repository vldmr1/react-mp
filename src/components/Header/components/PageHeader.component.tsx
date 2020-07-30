import styled from 'styled-components';

interface PageHeaderProps {
  isMoviePage: boolean;
}

const PageHeader = styled.header<PageHeaderProps>`
  height: 6.5rem;
  background-color: ${({ theme, isMoviePage }): string => (isMoviePage ? theme.colors.overlayBlack : 'none')};
`;

export default PageHeader;
