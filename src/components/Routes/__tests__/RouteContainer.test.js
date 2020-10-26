import React from 'react';
import RouteContainer from '../RouteContainer';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTheme } from '@commons/utils/renderWithTheme'
import AuthWrapper from '@components/Auth';

describe('<RouteContainer> Route Component Loader', () => {
  it('renders', () => {
    const route = { path: ['/', '/home'], exact: true, component: Home };

    const container = renderWithTheme(
      <>
      <AuthWrapper>
        <BrowserRouter>
            <RouteContainer route={route} />
          </BrowserRouter>
      </AuthWrapper>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
