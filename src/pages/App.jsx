import React, {Component} from 'react';
import About from './About';
import User from './User';
import Home from './Home'
import NoMatch from './NoMatch'
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    let num = Math.floor(Math.random() * 100) + 1;
    let name = '吴薇';

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ul>
              <li><NavLink exact to='/' activeStyle={{color: '#ff0000'}}>Home</NavLink></li>
              <li><NavLink exact to={{
                pathname: '/user',
                search: `id=${num}&name=${name}`,
              }} activeStyle={{color: '#ff0000'}}>User</NavLink>
              </li>
              <li><NavLink exact to='/about' activeStyle={{color: '#ff0000'}}>About</NavLink></li>
              <li><Link to="/new">New Home</Link></li>
            </ul>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/user' component={User} {...this.props}/>
              <Route path='/new' render={() => <div>Welcome New Home</div>}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
      ;
  }
}

export default App;
