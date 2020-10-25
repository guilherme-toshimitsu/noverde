import styled, { css } from 'styled-components';

const Loading = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  margin: auto;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  height: 80px;
  display: block;
  margin-top: 60px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
