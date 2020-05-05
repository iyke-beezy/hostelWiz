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
import Subscribe from '../components/subscription/subscribe'
import Filters from '../components/Filters';
import FilterClass from '../components/filterClass';
import BigImage from '../components/bigImage';
import Foot from '../components/foot';
import Item from '../components/subscription/item';
import Uploads from '../components/subscription/upload';
import Amenities from '../components/subscription/amenities';
import Join from '../components/subscription/join';
import Details from '../components/subscription/details';
import LastStep from '../components/subscription/lastStep';


class App extends Component {
  render() {
    return (
      <Router>
          <CookiesProvider>
        <Switch>
          <Route path="/" exact component={LastStep} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/listing" component = {Subscribe} />
          {/* <Route path="/signup" component={SignUpUI} /> */}
        </Switch>
        </CookiesProvider>
      </Router>
    );
  }
}

export default App;