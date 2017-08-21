
import React, { Component } from 'react';
import Homepage from '../view/home_page/nav/index';
import dashboard from '../view/home_page/dashboard/dashboard';
import Login from '../view/login/login';
import Test from '../view/test/index';
import {
  BrowserRouter as Router,
  Route,
  HashRouter  
} from 'react-router-dom';

class RouterSetting extends Component {
  render() {
    return (
      <HashRouter>
        <Router basename="/">
        <div className="height-100">
            <Route exact path="/" component={Login}/>
            <Route path="/Homepage" component={Homepage}/>
            <Route path="/dashboard" component={dashboard}/>
        </div>
        </Router>
      </HashRouter>
    );
  }
}

export default RouterSetting;