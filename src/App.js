import './App.css';
import React, { Component } from 'react';
import Topmenu from './Component/topmenu/Topmenu.js';
import Content from './Component/content/Content.js';
import WebRouter from './Component/router/WebRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="test">
          <WebRouter></WebRouter>
          <Content></Content>
        </div>
      </Router>
      );

  }
}
export default App;

