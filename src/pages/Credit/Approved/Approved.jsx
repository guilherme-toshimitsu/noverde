import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from '@components/Container';
import {
  StyledTitle,
  StyledCenter,
  ValueText,
  StyledP,
} from '@components/Text';
import { Row, Col } from '@components/Grid';

import { useCredit } from '@components/Stores/Credit';
import {
  FlexRow,
  FlexContainer,
  FlexContainerColumnReversable,
} from '@components/FlexBox';

const CreditApproved = ({ history }) => {
  const [
    { approved, approvedValue, response, request, isLoading },
    {},
  ] = useCredit();
  if (!isLoading && !approved) {
    history.push('/credit');
  }

  return (
    <StyledContainer background={'primary'}>
      <StyledCenter>
        <StyledTitle>{'Uhull, voce foi aprovado!!!'}</StyledTitle>
        <FlexContainerColumnReversable>
          <FlexRow>
            {request.amount !== response.amount && (
              <StyledP>
                {'*O valor que liberamos e menor do que o escolhido'}
              </StyledP>
            )}
          </FlexRow>
          <Row>
            <Col md={4} sm={12}>
              <ValueText
                text={'Limite liberado'}
                value={`R$ ${approvedValue}`}
              />
            </Col>
            <Col md={4} sm={12}>
              <ValueText
                text={'Parcelas para pagar'}
                value={`${response.period} x R$ ${parseFloat(
                  response.installment
                ).toFixed(2)}`}
              />
            </Col>
            <Col md={4} sm={12}>
              <ValueText
                text={'Primeiro Vencimento'}
                value={`${
                  response.first_due_date &&
                  response.first_due_date.replace(/-/g, '/')
                }`}
              />
            </Col>
          </Row>
        </FlexContainerColumnReversable>
      </StyledCenter>
    </StyledContainer>
  );
};

CreditApproved.propTypes = {
  history: PropTypes.object,
};

export default CreditApproved;
