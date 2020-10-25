import styled, { css } from 'styled-components';

//Implementar Mais GridStyle Bootsrapt...
const GridContainer = styled.div``;
const collapsed = 'display: none;';

const Row = styled.div.attrs((props) => ({
  collapse: props.collapse,
}))`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  ${({ theme, collapse }) =>
    collapse &&
    collapse === 'sm' &&
    theme.breakpoints.down('sm')`
  ${collapsed}
`};
  ${({ theme, collapse }) =>
    collapse &&
    collapse === 'md' &&
    theme.breakpoints.up('sm')`
${collapsed}
`};
`;

const Col = styled.div.attrs((props) => ({
  sm: props.sm,
  md: props.md,
  collapse: props.collapse,
}))`
  ${({ md }) => `grid-column: span ${md}`};
  ${({ theme, sm }) => theme.breakpoints.down('sm')`
  grid-column: span ${sm};
`};
  ${({ theme, collapse }) =>
    collapse &&
    collapse === 'sm' &&
    theme.breakpoints.down('sm')`
  ${collapsed}
`};
  ${({ theme, collapse }) =>
    collapse &&
    collapse === 'md' &&
    theme.breakpoints.up('sm')`
${collapsed}
`};
`;

export { GridContainer, Row, Col };
