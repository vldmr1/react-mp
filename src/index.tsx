import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { GlobalStyles, theme } from 'theme';
import App from 'components/App';

const root = document.getElementById('root');

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
  root,
);
