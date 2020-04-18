import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from '../components/Login';
import Pin from '../UI/loginPin';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Profile from '../components/Profile';
import withAuthentication from '../containers/withAuthentication';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <CookiesProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch>
        </CookiesProvider>
      </Router>
    );
  }
}

export default App;