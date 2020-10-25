import styled, { css } from 'styled-components';

const StyledTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}
  color: ${({ theme }) => theme.palette.white.main};
  margin-top: 36px;
  margin-bottom: 36px;
  font-size: 32px;
`;

const StyledSubtitle = styled.h3`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}
  color: ${({ theme }) => theme.palette.white.main};
  margin-bottom: 12px;
  font-size: 24px;
`;

const StyledCenter = styled.div`
  margin: 0 auto;
  overflow: none;
  padding: 0px 0px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.transparent.main};
  ${({ theme }) => theme.breakpoints.down('sm')`
  padding: 24px 24px 24px 24px;
  border: none;
`};
`;

const StyledP = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}
  padding: 0px 16px;
  color: ${({ theme }) => theme.palette.white.main};
  font-size: 24px;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  overflow: none;
  padding: 0px 0px;
  text-align: center;
  display: flex;
  background-color: ${({ theme }) => theme.palette.transparent.main};
  ${({ theme }) => theme.breakpoints.down('sm')`
  padding: 24px 24px 24px 24px;
  border: none;
  `};
`;

export { StyledTitle, StyledCenter, StyledContainer, StyledP, StyledSubtitle };
