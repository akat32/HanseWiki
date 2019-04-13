import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Main, Signin, Signup } from '../component/index'

import { Content } from '../component/content/content'

class App extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

export default App;
