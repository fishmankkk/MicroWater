
import React, { Component } from 'react';
import menuNav from '../view/user_page/nav/index';
import Login from '../view/login/login';
import testAPP from '../App';
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
            <Route path="/menuNav" component={menuNav}/>
            <Route path="/testAPP" component={testAPP}/>
        </div>
        </Router>
      </HashRouter>
    );
  }
}

export default RouterSetting;