import styled from 'styled-components';

interface GridContainerProps {
  columns: string;
  columnWidth: string;
  gridGap: string;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns, columnWidth }): string => `repeat(${columns}, ${columnWidth})`};
  grid-gap: ${({ gridGap }) => gridGap};
`;

export default GridContainer;
