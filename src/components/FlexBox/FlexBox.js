import styled, { css } from 'styled-components';

//Implementar Mais GridStyle Bootsrapt...
const FlexContainerColumnReversable = styled.div`
  flex-direction: column;
  ${({ theme, sm }) => theme.breakpoints.down('sm')`
  flex-direction: column-reverse;
`};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexContainerSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FlexRow = styled.div``;

const Col = styled.div.attrs((props) => ({
  sm: props.sm,
  md: props.md,
}))`
  ${({ md }) => `grid-column: span ${md}`};
  ${({ theme, sm }) => theme.breakpoints.down('sm')`
  grid-column: span ${sm};
`}
`;

export {
  FlexContainer,
  FlexRow,
  FlexContainerColumnReversable,
  FlexContainerSpaceBetween,
};
