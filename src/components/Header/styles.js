import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  background-color: white;
  ${({ theme }) => theme.breakpoints.down('sm')`
  height: 140px;
`};
`;
const collapsed = 'display: none;';

const HeaderInsideContainer = styled.div.attrs((props) => ({
  collapse: props.collapse,
}))`
  margin: 0 auto;
  overflow: none;
  background-color: transparent;
  max-width: 580px;
  margin-top: 60px;
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
  ${({ theme }) => theme.breakpoints.down('sm')`
  margin-top: 20px;
`};
`;

const ColoredCircle = styled.div.attrs((props) => ({
  background: props.background || 'grey300',
}))`
  background-color: ${({ theme, background }) =>
    theme.palette[background].main};
  border-radius: 80%;
  height: 60px;
  width: 60px;
  margin-right: -10px;
  margin-left: -10px;
  z-index: 1;
`;

const ColoredBar = styled.div.attrs((props) => ({
  background: props.background || 'grey300',
}))`
  background-color: ${({ theme, background }) =>
    theme.palette[background].main};
  height: 15px;
  width: 220px;
  z-index: 0;
`;

const ColoredText = styled.div.attrs((props) => ({
  color: props.color || 'primary',
}))`
  margin-top: 12px;
  color: ${({ theme, color }) => theme.palette[color].main};
  height: 40px;
  width: 60px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: left;
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}
`;

const MobileTitle = styled.h2.attrs((props) => ({
  color: props.color || 'primary',
}))`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}
  color: ${({ theme, color }) => theme.palette[color].main};
   margin-top: 36px;
  margin-bottom: 36px;
  font-size: 32px;
`;

const MobileSubtitle = styled.h3.attrs((props) => ({
  color: props.color || 'primary',
}))`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}
  color: ${({ theme, color }) => theme.palette[color].main};
  margin-bottom: 12px;
  font-size: 24px;
`;

export {
  HeaderContainer,
  ColoredCircle,
  ColoredBar,
  ColoredText,
  HeaderInsideContainer,
  MobileTitle,
  MobileSubtitle,
};
