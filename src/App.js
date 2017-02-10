import React, { Component } from 'react';
import './App.css';

import {Admin, Resource, Delete } from 'admin-on-rest';

import restClient from './restClient';

import { DataSourceList, DataSourceEdit} from './datasources';
import { AdapterList, AdapterEdit} from './adapters';

class App extends Component {
  render() {
    return (
      <Admin title="DataSourceAPI" restClient={restClient('http://localhost:4000/api')}>
        <Resource name="datasources" list={DataSourceList} edit={DataSourceEdit} delete={Delete} />
        <Resource name="adapters" list={AdapterList} edit={AdapterEdit} delete={Delete}/>
      </Admin>
    );
  }
}

export default App;