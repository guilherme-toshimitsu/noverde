import React from 'react';
import PropTypes from 'prop-types';

import { FormCPF } from '@components/Forms';
import { StyledContainer, InsideContainer } from '@components/Container';

const Home = ({ history }) => {
  const onSuccess = () => history.push('/credit');
  return (
    <StyledContainer>
      <InsideContainer>
        <FormCPF onSuccess={onSuccess} />
      </InsideContainer>
    </StyledContainer>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
