import React from 'react';

import Button from 'components/Button';
import { render } from '@testing-library/react';

describe('<Button />', () => {
  it('creates a Button component', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('creates a disabled Button component', () => {
    const { asFragment } = shallowWithTheme(<Button disabled />);

    expect(asFragment).toMatchSnapshot();
  });
});
