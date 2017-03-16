import React, { Component } from 'react';
import './App.css';

import {Navbar, Nav} from  'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import classNames from 'classnames';

import Home from './components/Home';
import Adapters from './components/Adapters';
import DataSources from './components/DataSources';
import EditDataSource from './components/EditDataSource';
import Queries from './components/Queries';


class App extends Component {

  constructor(props, context){
    super(props, context);
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
                <Link to="/">DataSourceAPI</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <li><NavLink to="/adapters">Adapters</NavLink></li> {/*TODO: active class*/}
              <li><NavLink to="/datasources">DataSources</NavLink></li>
              <li><NavLink to="/queries">Queries</NavLink></li>
            </Nav>
          </Navbar>
          
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/adapters" component={Adapters}/>

            <Route exact path="/datasources" component={DataSources}/>
            <Route exact path="/datasources/:id/edit" component={EditDataSource}/>
            <Route exact path="/datasources/new" component={EditDataSource}/>

            <Route exact path="/queries" component={Queries}/>
          </div>
          </div>
      </Router>
    );
  }
}

export default App;