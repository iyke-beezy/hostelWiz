import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from '../components/Login';
import Register from '../components/Register'
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Profile from '../components/Profile';
import withAuthentication from '../containers/withAuthentication';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import Subscribe from '../components/subscription/subscribe'
import Join from '../components/subscription/join';
/*import Filters from '../components/Filters';
import FilterClass from '../components/filterClass';
import BigImage from '../components/bigImage';
import Foot from '../components/foot';
import Item from '../components/subscription/item';
import Uploads from '../components/subscription/upload';
import Amenities from '../components/subscription/amenities';
import Details from '../components/subscription/details';
*/
import LastStep from '../components/subscription/lastStep';
import Test from '../test';
import Explore from './explore';
import history from '../services/history'
import ManagerProfile from '../components/Manager_profile';
import Terms from '../components/terms';
import Trust from '../components/trust';
import Accessibility from '../components/accessibility';
import FAQS from '../components/faqs';
import NewsRoom from '../components/newsroom';
library.add(faStar)

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <CookiesProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" component={withAuthentication(Dashboard)} />
            <Route path="/profile" component={ManagerProfile} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/listing" component={Subscribe} />
            <Route path="/join" component={Join} />
            <Route path="/terms" component={Terms} />
            <Route path="/trust" component={Trust} />
            <Route path="/faqs" component={FAQS} />
            <Route path="/newsroom" component={NewsRoom} />
            <Route path="/accessibility" component={Accessibility} />
            <Route path="/test" component={Test} />
            <Route path="/lastStep" component={LastStep} />
            <Route path="/:explore" component={Explore} />
            {/* <Route path="/signup" component={SignUpUI} /> */}
          </Switch>
        </CookiesProvider>
      </Router>
    );
  }
}

export default App;