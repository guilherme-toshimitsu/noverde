import React, { useState, useEffect } from 'react';
import { HeaderContainer, HeaderInsideContainer } from './styles';

import StepperHeader from './StepperHeader';
import StepperHeaderMobile from './StepperHeaderMobile';

import { useLocation } from 'react-router-dom';

const locations = {
  '/': 1,
  '/credit': 2,
  '/credit/approved': 3,
  '/credit/denied': 3,
};

const Header = () => {
  const [steps, setSteps] = useState(1);
  let location = useLocation();

  return (
    <HeaderContainer>
      <HeaderInsideContainer collapse={'sm'}>
        <StepperHeader
          steps={locations[location.pathname]}
          color={location.pathname === '/credit/denied' ? 'dark' : 'primary'}
        />
      </HeaderInsideContainer>
      <HeaderInsideContainer collapse={'md'}>
        <StepperHeaderMobile
          steps={locations[location.pathname]}
          color={location.pathname === '/credit/denied' ? 'dark' : 'primary'}
        />
      </HeaderInsideContainer>
    </HeaderContainer>
  );
};

export default Header;
