import React, { Component } from 'react';
import './App.css';

import {Admin, Resource, Delete } from 'admin-on-rest';

import restClient from './restClient';

import { DataSourceList, DataSourceEdit} from './datasources';
import { AdapterList, AdapterEdit} from './adapters';

var apiUrl = 'http://localhost:4000/api';

import AdatpersData from './adaptersData';

var adapters = AdatpersData(apiUrl);

class App extends Component {

  constructor(){
    super();
    this.state = {
      adapters: {}
    };
  }
  
  componentWillMount(){
    AdatpersData(apiUrl).then((adapters) => {
      this.setState({adapters})
    });
  }

  render() {
    console.log(this.state.adapters);
    return (
      <Admin title="DataSourceAPI" restClient={restClient(apiUrl)}>
        <Resource name="datasources" list={DataSourceList} edit={DataSourceEdit} delete={Delete} adapters={adapters} />
        <Resource name="adapters" list={AdapterList} edit={AdapterEdit} delete={Delete}/>
      </Admin>
    );
  }
}

export default App;