import React from 'react';


import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import Home from './components/App';
import { GlobalStyles } from './components/styles/global-styles';
import { theme } from './components/styles/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
    </ThemeProvider>
  </React.StrictMode>
);


