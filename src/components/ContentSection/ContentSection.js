import styled, { css } from 'styled-components';

const ContentSection = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.grey300.main};
`;

export default ContentSection;
