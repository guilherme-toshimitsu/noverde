import React from 'react';

import { StyledContainer, InsideContainer } from '@components/Container';
import { StyledTitle, StyledCenter } from '@components/Text';

const NotFound = () => {
  return (
    <StyledContainer background={'dark'}>
      <InsideContainer>
        <StyledCenter>
          <StyledTitle>{'Pagina Nao Encontrada :('}</StyledTitle>
        </StyledCenter>
      </InsideContainer>
    </StyledContainer>
  );
};

NotFound.propTypes = {};

export default NotFound;
