import styled from 'styled-components';

interface FlexContainerProps {
  width?: string;
  flexDirection?: string;
  flexGrow?: string;
  justifyContent?: string;
  alignContent?: string;
  marginBottom?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  width: ${({ width }): string => width || 'initial'};
  margin-bottom: ${({ marginBottom }): string => marginBottom || 'initial'};
  flex-direction: ${({ flexDirection }): string => flexDirection || 'initial'};
  flex-grow: ${({ flexGrow }): string => flexGrow || 'initial'};
  justify-content: ${({ justifyContent }): string => justifyContent || 'initial'};
  align-content: ${({ alignContent }): string => alignContent || 'initial'};
`;

export default FlexContainer;
