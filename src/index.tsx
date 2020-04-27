import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';
import {sendEvent, UserEvent} from './tools/analytics';
import {ErrorBoundary} from './Component/Error';

const theme = {
  addModal: {
    windowSize: 600,
    sourceCount: 3,
    spacing: 60,
  },
  color: {
    yellow: 'rgb(233, 177, 61)',
    red: 'rgb(193, 51, 56)',
    blue: 'rgb(39, 94, 132)',
    green: 'rgb(43, 102, 60)',
    white: 'rgb(208, 208, 208)',
    grey: 'rgb(128, 128, 128)',
    lightGrey: 'rgb(179, 179, 179)',
    black: 'rgb(18, 18, 18)',
  },
};

sendEvent(UserEvent.AppLaunch);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
