import React, {Component} from 'react';
import About from './About';
import User from './User';
import Home from './Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user/5">User</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/user/:id" component={User}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
