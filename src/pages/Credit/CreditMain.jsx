import React from 'react';
import PropTypes from 'prop-types';
import Routes from '@components/Routes';
import CreditWrapper from '@components/Stores/Credit';

const CreditMain = ({ routes }) => {
  return (
    <CreditWrapper>
      <Routes routes={routes} />
    </CreditWrapper>
  );
};

CreditMain.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default CreditMain;
