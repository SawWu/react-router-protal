import React, {Component} from 'react';
import About from './About';
import User from './User';
import Home from './Home'
import NoMatch from './NoMatch'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

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
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/user/:id" component={User}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
