import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '@components/Routes';
import AuthWrapper from '@components/Auth';
import ContentSection from '@components/ContentSection';
import Header from '@components/Header';
import routes from '@routes';

const Main = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <ContentSection>
          <Header />
          <Routes routes={routes} />
        </ContentSection>
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default Main;
