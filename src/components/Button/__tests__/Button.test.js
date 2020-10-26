import React from 'react';

import Button from '../Button';
import { renderWithTheme } from '@commons/utils/renderWithTheme';

describe('<Button />', () => {
  it('creates a Button component', () => {
    const { asFragment } = renderWithTheme(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('creates a disabled Button component', () => {
    const { asFragment } = renderWithTheme(<Button disabled />);

    expect(asFragment).toMatchSnapshot();
  });
});
