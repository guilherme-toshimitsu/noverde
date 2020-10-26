import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

//height = 100vh - header - border
//on <sm = 100vh - header
const PageContainer = styled.div.attrs((props) => ({
  color: props.color || 'grey400',
  background: props.background || 'transparent',
}))`
  margin: 0 auto;
  overflow: none;
  min-height: calc(100vh - 202px);
  text-align: left;
  border-top: ${({ theme, color }) => `2px solid ${theme.palette[color].dark}`};
  background-color: ${({ theme, background }) =>
    theme.palette[background].main};
  ${({ theme }) => theme.breakpoints.down('sm')`
  border: none;
  min-height: calc(100vh - 140px);
`};
`;

const InsideContainer = styled.div`
  margin: 0 auto;
  overflow: none;
  background-color: transparent;
  max-width: 580px;
  padding: 100px 24px;
  ${({ theme }) => theme.breakpoints.down('sm')`
  border: none;
`};
`;

PageContainer.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'error', 'alert', 'grey400']),
  'background-color': PropTypes.oneOf([
    'primary',
    'success',
    'error',
    'alert',
    'transparent',
  ]),
};

PageContainer.defaultProps = {
  color: 'grey400',
  background: 'transparent',
};

export default PageContainer;
export { InsideContainer };
