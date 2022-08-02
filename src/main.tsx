import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import ThemeProviders from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { gapi } from "gapi-script";
gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "970416655854-pp42pikachlr2g7m96tngejs8vhaacbs.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProviders>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </ThemeProviders>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
  // </React.StrictMode>
);
