import React from 'react';
import Main from '..';
import { renderWithTheme} from '@commons/utils/renderWithTheme'

describe('<Main> Main Container Page', () => {
  it('renders', () => {
    const container = renderWithTheme(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
