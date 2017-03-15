import React, { Component } from 'react';
import './App.css';

import {Navbar, Nav, NavItem} from  'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap';

import Service from './Service';

import Home from './Home';


class App extends Component {

  constructor(){
    super();
    this.state = {
    };
  }
  
  componentWillMount(){

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">DataSourceAPI</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <li><Link to="/datasources">DataSources</Link></li>
              <li><Link to="/queries">Queries</Link></li>
            </Nav>
          </Navbar>
          
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/datasources" component={Home}/>
            <Route exact path="/queries" component={Home}/>
          </div>
          </div>
      </Router>
    );
  }
}

export default App;