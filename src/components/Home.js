import React, { Component } from 'react';

import {Grid, Row, Col, Panel} from  'react-bootstrap';

import BigText from 'big-text.js';

import AdapterService from '../service/AdapterService';
import DataSourceService from '../service/DataSourceService';
import QueryService from '../service/QueryService';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            adaptersCount: "",
            datasourcesCount: "",
            queriesCount:""
        }
    }

    componentWillMount() {
        AdapterService.getCount().then((count) => {
            this.setState({adaptersCount: count});
        });
        DataSourceService.getCount().then((count) => {
            this.setState({datasourcesCount: count});
        });
        QueryService.getCount().then((count) => {
            this.setState({queriesCount: count});
        });
    }

    componentDidUpdate() {
        BigText(this.refs.bigText1);
        BigText(this.refs.bigText2);
        BigText(this.refs.bigText3);
    }

    navigateTo = (url) =>{
        this.props.history.push(url);      
    }    

    render() {
        return (
            <div>
                <Grid>
                    <Col xs={12} md={4}>
                        <Panel style={{cursor: 'pointer'}} onClick={()=>{this.navigateTo('/adapters')}}>
                            <h2 style={{textAlign: 'center'}}>Adapters</h2>
                            <div style={{height: '100px'}}>
                                <span ref="bigText1">{this.state.adaptersCount}</span>
                            </div>
                        </Panel>
                    </Col>
                    <Col xs={12} md={4}>
                        <Panel style={{cursor: 'pointer'}} onClick={()=>{this.navigateTo('/datasources')}}>
                            <h2 style={{textAlign: 'center'}}>DataSources</h2>
                            <div style={{height: '100px'}}>
                                <span ref="bigText2">{this.state.datasourcesCount}</span>
                            </div>
                        </Panel>
                    </Col>
                    <Col xs={12} md={4}>
                        <Panel style={{cursor: 'pointer'}} onClick={()=>{this.navigateTo('/queries')}}>
                            <h2 style={{textAlign: 'center'}}>Queries</h2>
                            <div style={{height: '100px'}}>
                                <span ref="bigText3">{this.state.queriesCount}</span>
                            </div>
                        </Panel>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default Home;