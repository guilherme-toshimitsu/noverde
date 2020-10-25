import React from 'react';

import { StyledContainer, InsideContainer } from '@components/Container';
import { StyledTitle, StyledCenter } from '@components/Text';

const CreditApproved = () => {
  return (
    <StyledContainer background={'dark'}>
      <InsideContainer>
        <StyledCenter>
          <StyledTitle>
            {'Nao conseguimos aprovar o seu emprestimo :('}
          </StyledTitle>
        </StyledCenter>
      </InsideContainer>
    </StyledContainer>
  );
};

CreditApproved.propTypes = {};

export default CreditApproved;
