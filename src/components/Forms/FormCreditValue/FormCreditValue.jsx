import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import {
  StyledP,
  StyledInputContainer,
  StyledTitle,
  InputMaskedMoney,
} from '@components/Input';

import { validCredit } from '@commons/utils/validations/credit';
import useDebounce from '@commons/utils/debounce';

const FormCPF = ({ onSuccess }) => {
  const [creditValue, setCreditValue] = useState(null);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const debouncedButton = useDebounce(submit, 500);

  useEffect(() => {
    setError(creditValue && validCredit(creditValue));
  }, [creditValue]);

  const onSubmit = () => {
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && debouncedButton) {
      onSuccess(creditValue);
      setSubmit(false);
    }
  }, [debouncedButton]);

  return (
    <>
      <StyledTitle>{'De quanto voce precisa para ficar #NOVERDE?'}</StyledTitle>
      <StyledInputContainer>
        <InputMaskedMoney onBlur={setCreditValue} error={error} />
        {error && <StyledP>{error}</StyledP>}
      </StyledInputContainer>
      <Button
        disabled={!creditValue || !!error}
        data-testid={'go-to-seller'}
        onClick={onSubmit}
        color="primary"
        variant="contained"
      >
        {'PROXIMO'}
      </Button>
    </>
  );
};

FormCPF.propTypes = {
  onSuccess: PropTypes.func,
};

FormCPF.defaultProps = {
  onSuccess: () => {},
};

export default FormCPF;
