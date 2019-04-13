import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Main, Signin, Signup } from '../component/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Main}/>
          <Route exact path = "/signin" component = {Signin}/>
          <Route exact path = "/signup" component = {Signup}/>
        </div>
      </Router>
    );
  }
}

export default App;
