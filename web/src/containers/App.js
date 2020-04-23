import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Profile from '../components/Profile';
import withAuthentication from '../containers/withAuthentication';

import './App.css';
import Filters from '../components/Filters';
import FilterClass from '../components/filterClass';
import BigImage from '../components/bigImage';
import Foot from '../components/foot';

class App extends Component {
  render() {
    return (
      <Router>
          <CookiesProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
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