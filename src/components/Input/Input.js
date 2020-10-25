import styled, { css } from 'styled-components';

const StyledInputContainer = styled.div`
  height: 80px;
  margin: 0;

  ${({ theme }) => theme.breakpoints.down('sm')`
  height: 70px;
  `}
`;

const MaskedContainer = styled.div`
  display: flex;
`;

const Mask = styled.div`
  padding-top: 2px;
  padding-right: 8px;
  background-color: transparent;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}

  &:focus {
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-bottom: ${({ theme }) => `2px solid ${theme.palette.error.main}`};
    `}
`;

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
  border-radius: none;
  line-height: 1;
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}

  &:focus {
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-bottom: ${({ theme }) => `2px solid ${theme.palette.error.main}`};
    `}
`;

const StyledTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}
  color: ${({ theme }) => theme.palette.grey400.dark};

  margin-bottom: 36px;
  font-size: 18px;
`;

const StyledP = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}
  padding: 0px 16px;
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 14px;
`;

export {
  StyledInput,
  StyledP,
  StyledTitle,
  StyledInputContainer,
  MaskedContainer,
  Mask,
};
