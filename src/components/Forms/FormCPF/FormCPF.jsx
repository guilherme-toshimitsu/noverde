import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import {
  StyledInput,
  StyledP,
  StyledInputContainer,
  StyledTitle,
} from '@components/Input';

import { isValidCpf } from '@commons/utils/validations/cpf';
import useDebounce from '@commons/utils/debounce';

import { useAuth } from '@components/Auth';

const FormCPF = ({ onSuccess }) => {
  const [CPF, setCPF] = useState(null);
  const [error, setError] = useState(false);
  const [{}, { doLogin }] = useAuth();
  const [submit, setSubmit] = useState(false);
  const debouncedButton = useDebounce(submit, 500);

  useEffect(() => {
    setError(CPF && isValidCpf(CPF));
  }, [CPF]);

  useEffect(() => {
    if (debouncedButton) {
      doLogin(CPF);
      onSuccess();
    }
  }, [debouncedButton]);

  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      <StyledTitle>
        {'Ola, queremos te ver #NOVERDE, para isso precisamos do seu CPF'}
      </StyledTitle>
      <StyledInputContainer>
        <StyledInput
          data-testid="input-cpf"
          placeholder={'Informe o seu CPF'}
          onBlur={(event) => setCPF(event.target.value)}
          error={error}
          onKeyDown={(e) => {
            e.keyCode === 13 ? e.target.blur() : null;
          }}
        />
        {error && <StyledP data-testid="error-cpf">{error}</StyledP>}
      </StyledInputContainer>
      <Button
        disabled={!CPF || !!error}
        data-testid={'button-cpf'}
        onClick={() => onSubmit()}
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
