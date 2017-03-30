import React, { Component } from 'react';
import './App.css';

import {Navbar, Nav, FormControl, FormGroup, Button} from  'react-bootstrap';
import {
  HashRouter as Router,
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

import config from './config';

var apiUrl = config.getUrl();

class App extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
    };
  }
  
  componentDidMount() {
    this.serverUrl.value = apiUrl;
  }
  

  updateURL = ()=>{
    config.updateUrl(this.serverUrl.value);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Polypus Admin</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <li><NavLink to="/adapters">Adapters</NavLink></li> {/*TODO: active class*/}
              <li><NavLink to="/datasources">DataSources</NavLink></li>
              {/*<li><NavLink to="/queries">Queries</NavLink></li>*/}
            </Nav>
            <Navbar.Form pullRight>
              <form>
              <FormGroup>
                <FormControl ref="serverUrl" type="text" placeholder="Server URL" inputRef={ref => { this.serverUrl = ref; }} />
              </FormGroup>
              {' '}
              <Button type="submit" bsStyle="primary" onClick={this.updateURL}>Update</Button>
              </form>
            </Navbar.Form>
          </Navbar>
          
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/adapters" component={Adapters}/>

            <Route exact path="/datasources" component={DataSources}/>
            <Route exact path="/datasources/:id/edit" component={EditDataSource}/>
            <Route exact path="/datasources/new" component={EditDataSource}/>

            {/*<Route exact path="/queries" component={Queries}/>*/}
          </div>
          </div>
      </Router>
    );
  }
}

export default App;