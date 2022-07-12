import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './styles/app.scss';

// styles
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import ThemeProvider from './context/ThemeContext';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
