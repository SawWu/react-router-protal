import React, {Component} from 'react';
import About from './About';
import User from './User';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit and save to reload.
          </p>
          <Route path="/about" component={About}/>
          <Route path="/user" component={User}/>
        </div>
      </Router>
    );
  }
}

export default App;
