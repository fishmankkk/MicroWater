
import React, { Component } from 'react';
import menuNav from '../view/user_page/nav/index';
import {
  BrowserRouter as Router,
  Route,
  HashRouter  
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Router basename="/">
          <div>
            <Route exact path="/" component={menuNav}/>
          </div>
        </Router>
      </HashRouter>
    );
  }
}

export default App;