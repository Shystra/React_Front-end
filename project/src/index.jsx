import React from 'react';


import styled, { ThemeProvider, css } from 'styled-components';
import ReactDOM from 'react-dom/client';
import Home from './components/App';
import { GlobalStyles } from './components/styles/global-styles';
import { theme } from './components/styles/theme';
import { Heading } from './components/Heading';


export const Container = styled.div`
  background: red;
  
  ${(props) => css`
    color: ${props.theme.colors.white};
  `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Heading />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);


