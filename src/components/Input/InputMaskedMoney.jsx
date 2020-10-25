import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, MaskedContainer, Mask } from './Input';
const InputMoney = ({ onBlur, error }) => {
  return (
    <MaskedContainer>
      <Mask error={error}>{'R$'}</Mask>
      <StyledInput
        onBlur={(event) => onBlur(event.target.value)}
        error={error}
        type={'number'}
        onKeyDown={(e) => {
          e.keyCode === 13 ? e.target.blur() : null;
        }}
      />
    </MaskedContainer>
  );
};

InputMoney.propTypes = {
  onBlur: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

InputMoney.defaultProps = {
  onBlur: () => {},
  error: false,
};
export default InputMoney;
