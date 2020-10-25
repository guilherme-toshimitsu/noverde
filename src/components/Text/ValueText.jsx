import React from 'react';
import PropTypes from 'prop-types';

import { StyledCenter, StyledP, StyledSubtitle } from './Text';
const ValueText = ({ text, value }) => {
  return (
    <StyledCenter>
      <StyledP>{text}</StyledP>
      <StyledSubtitle>{value}</StyledSubtitle>
    </StyledCenter>
  );
};

ValueText.propTypes = {
  onBlur: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

ValueText.defaultProps = {
  onBlur: () => {},
  error: false,
};
export default ValueText;
