import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';

const theme = {
  addModal: {
    windowSize: 600,
    sourceCount: 2,
    spacing: 60,
  },
  color: {
    yellow: 'rgb(233, 177, 61)',
    red: 'rgb(233, 177, 61)',
    blue: 'rgb(39, 94, 132)',
    white: 'rgb(208, 208, 208)',
    grey: 'rgb(128, 128, 128)',
    lightGrey: 'rgb(179, 179, 179)',
    black: 'rgb(18, 18, 18)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
