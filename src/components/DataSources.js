import React, { Component } from 'react';

import DataSourceService from '../service/DataSourceService';

import {Table, Button, ButtonToolbar, Glyphicon, ButtonGroup} from 'react-bootstrap';

import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

class DataSources extends Component {

    constructor(props){
        super(props);

        this.state = {
            datasources: []
        };
    }
    
    componentWillMount() {
       this.getDataSources();
    }

    getDataSources = ()=>{
        DataSourceService.getAll().then((datasources) => {
            this.setState({datasources});
        });
    }

    deleteDataSource = (datasource)=>{
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this! Delete "+datasource.name,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then(() => {
                this.setState({
                    datasources: this.state.datasources.filter((ds)=>{
                        return ds._id !== datasource._id;
                    })
                });

                swal(
                    'Deleted!',
                    'Your DataSource '+ datasource.name +' has been deleted.',
                    'success'
                )
        });
    }
    

    render() {
        return (
            <div>
                <h1>DataSources</h1>
                <div>Count: {this.state.datasources.length}</div>
                <ButtonToolbar style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button bsStyle="primary">Create new</Button>
                    <Button onClick={this.getDataSources}><Glyphicon glyph="refresh"/></Button>
                </ButtonToolbar>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Adapter</th>
                            <th>Updated At</th>
                            <th>Created At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datasources.map((datasource)=>{
                            return <tr>
                                <td>{datasource._id}</td>
                                <td>{datasource.name}</td>
                                <td>{datasource.adapter}</td>
                                <td>{(new Date(datasource.updatedAt)).toLocaleString()}</td>
                                <td>{(new Date(datasource.createdAt)).toLocaleString()}</td>
                                <td>
                                <ButtonGroup>
                                <Button onClick={() => {
                                    this.props.history.push(`${this.props.match.url}/${datasource._id}/edit`);
                                }}><Glyphicon glyph="edit"/></Button>
                                <Button onClick={() => {
                                    this.deleteDataSource(datasource);
                                }}><Glyphicon glyph="trash"/></Button>
                                </ButtonGroup>                                
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default DataSources;