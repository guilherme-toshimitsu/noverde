import React from 'react';
import PropTypes from 'prop-types';

import Api from '@api';

import { StyledContainer, InsideContainer } from '@components/Container';
import { FormCreditValue } from '@components/Forms';
import Loading from '@components/Loading';
import { useAuth } from '@components/Auth';
import { useCredit } from '@components/Stores/Credit';

const CreditStart = () => {
  const [{ cpf }] = useAuth();
  const [{ isLoading }, { doLoan }] = useCredit();
  const onSuccess = (value) => {
    doLoan({ value: value, cpf: cpf });
  };
  return (
    <StyledContainer>
      <InsideContainer>
        {isLoading ? <Loading /> : <FormCreditValue onSuccess={onSuccess} />}
      </InsideContainer>
    </StyledContainer>
  );
};

CreditStart.propTypes = {
  history: PropTypes.object,
};

export default CreditStart;
