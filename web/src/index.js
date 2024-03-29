import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Router } from 'react-router-dom';
import history from './services/history';
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <Router history={history}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
