import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

import './styles/app.scss';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import ThemeProviders from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store/store';
import { theme } from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProviders>
      <NextUIProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </Provider>
      </NextUIProvider>
    </ThemeProviders>
  </BrowserRouter>,
  document.getElementById('root'),
  // </React.StrictMode>
);
