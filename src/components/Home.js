import React, { Component } from 'react';

import {Grid, Col, Panel} from  'react-bootstrap';

import BigText from 'react-bigtext';

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
                            <BigText options={{height: '100px', delay:100}}>
                                {this.state.adaptersCount}
                            </BigText>
                        </Panel>
                    </Col>
                    <Col xs={12} md={4}>
                        <Panel style={{cursor: 'pointer'}} onClick={()=>{this.navigateTo('/datasources')}}>
                            <h2 style={{textAlign: 'center'}}>DataSources</h2>
                            <BigText options={{height: '100px', delay:100}}>
                                {this.state.datasourcesCount}
                            </BigText>
                        </Panel>
                    </Col>
                    {/*<Col xs={12} md={4}>
                        <Panel style={{cursor: 'pointer'}} onClick={()=>{this.navigateTo('/queries')}}>
                            <h2 style={{textAlign: 'center'}}>Queries</h2>
                            <BigText options={{height: '100px', delay:100}}>
                                {this.state.queriesCount}
                            </BigText>
                        </Panel>
                    </Col>*/}
                </Grid>
            </div>
        );
    }
}

export default Home;