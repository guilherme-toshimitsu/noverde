import React from 'react';
import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from '@components/Auth';

import Home from '../';
import { renderWithTheme } from '@commons/utils/renderWithTheme'
describe('<Home> Home Page Container', () => {
  it('renders', () => {
    const container = renderWithTheme(
    <>
      <AuthWrapper>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthWrapper>
    </>
);
    expect(container).toMatchSnapshot();
  });

});
