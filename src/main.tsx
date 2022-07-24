import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

import './styles/app.scss';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import ThemeProviders from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProviders>
      <NextUIProvider>
            <App />
      </NextUIProvider>
    </ThemeProviders>
  </BrowserRouter>,
  document.getElementById('root'),
  // </React.StrictMode>
);
