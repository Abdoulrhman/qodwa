import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/init.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'context/theme';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
