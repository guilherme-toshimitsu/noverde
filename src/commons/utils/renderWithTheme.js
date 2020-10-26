import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';
import { render } from '@testing-library/react';

function renderWithTheme(children) {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
}

export { renderWithTheme };
