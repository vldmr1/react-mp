import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { GlobalStyles, theme } from 'theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from 'components/App';
import { store, persistor } from 'store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  root,
);
