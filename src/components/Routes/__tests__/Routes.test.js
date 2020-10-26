import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTheme } from '@commons/utils/renderWithTheme'
import AuthWrapper from '@components/Auth';

describe('<Routes> Routes Component Loader', () => {
  it('renders', () => {
    const routes = [{ path: ['/', '/home'], exact: true, component: Home }];

    const container = renderWithTheme(
      <>
      <AuthWrapper>
      <BrowserRouter>
          <Routes routes={routes} />
        </BrowserRouter>
      </AuthWrapper>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
