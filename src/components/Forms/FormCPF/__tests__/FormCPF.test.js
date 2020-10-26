import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from '@components/Auth';

import FormCPF from '../';
import { renderWithTheme } from '@commons/utils/renderWithTheme'
describe('<FormCPF> loads', () => {
  it('renders', () => {
    const container = renderWithTheme(
    <>
      <AuthWrapper>
        <BrowserRouter>
          <FormCPF />
        </BrowserRouter>
      </AuthWrapper>
    </>
  );
    expect(container.asFragment()).toMatchSnapshot();
  });

  //Text invalid message on failed InputCPF
  it('input a failed value', async () => {
    const container = renderWithTheme(
    <>
      <AuthWrapper>
        <BrowserRouter>
          <FormCPF />
        </BrowserRouter>
      </AuthWrapper>
    </>
  );

    const input = container.getByTestId('input-cpf')
    await wait(() => fireEvent.change(input, { target: { value: '40000' }}))
    await wait(() => fireEvent.blur(input))

    await wait(() => container.getByTestId('error-cpf'))
    const error = container.getByTestId('error-cpf')

    expect(error).toMatchSnapshot();
  });

});
