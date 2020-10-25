import React from 'react';
import PropTypes from 'prop-types';

import { MobileTitle, MobileSubtitle } from './styles';
const StepperHeader = ({ steps, color }) => {
  return (
    <>
      {steps === 0 && <MobileTitle color={'dark'}>{'Deu Erro =/'}</MobileTitle>}
      {steps === 1 && (
        <>
          <MobileSubtitle>{`Passo 1`}</MobileSubtitle>
          <MobileTitle>{'CPF'}</MobileTitle>
        </>
      )}
      {steps === 2 && (
        <>
          <MobileSubtitle>{`Passo 2`}</MobileSubtitle>
          <MobileTitle>{'Credito'}</MobileTitle>
        </>
      )}
      {steps === 3 && (
        <>
          <MobileTitle color={color}>{'Resultado'}</MobileTitle>
        </>
      )}
    </>
  );
};

StepperHeader.propTypes = {
  steps: PropTypes.number,
  color: PropTypes.string,
};

StepperHeader.defaultProps = {
  steps: 0,
  color: 'primary',
};
export default StepperHeader;
