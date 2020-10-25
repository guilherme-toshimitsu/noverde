import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  ColoredCircle,
  ColoredBar,
  ColoredText,
} from './styles';
import { FlexContainer, FlexContainerSpaceBetween } from '@components/FlexBox';

const StepperHeader = ({ steps, color }) => {
  return (
    <>
      {steps > 0 ? (
        <>
          <FlexContainer>
            <ColoredCircle background={color} />
            <ColoredBar background={steps > 1 && color} />
            <ColoredCircle background={steps > 1 && color} />
            <ColoredBar background={steps > 2 && color} />
            <ColoredCircle background={steps > 2 && color} />
          </FlexContainer>
          <FlexContainerSpaceBetween>
            <ColoredText color={color}>{'CPF'}</ColoredText>
            <ColoredText color={color}>{'Credito'}</ColoredText>
            <ColoredText color={color}>{'Resultado'}</ColoredText>
          </FlexContainerSpaceBetween>{' '}
        </>
      ) : (
        <FlexContainer>
          <ColoredText color={'dark'}>{'Erro =/'}</ColoredText>
        </FlexContainer>
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
