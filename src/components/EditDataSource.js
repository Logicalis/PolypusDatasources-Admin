import React, { Component } from 'react';
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import AdapterService from '../service/AdapterService';
import DataSourceService from '../service/DataSourceService';

import alertify from 'alertifyjs';
import '../../node_modules/alertifyjs/build/css/alertify.min.css';
import '../../node_modules/alertifyjs/build/css/themes/bootstrap.min.css';

import {Button, ButtonToolbar} from 'react-bootstrap';

var defaultSchema = {
    "title":"DataSource",
    "type": "object",
    "required": ["name","adapter"],
    "properties":{
        "_id":{
            "type": "string",
            "title": "ID"
        },
        "name": {
            "type": "string",
            "title": "Name"
        },
        "adapter": {
            "type": "string",
            "title": "Adapter"
        },
        "additionalProperties":{
            "type": "string",
            "title": "Additional Properties"
        },
        "updatedAt":{
            "type":"string",
            "title":"Updated at"
        },
        "createdAt":{
            "type":"string",
            "title":"Created at"
        }
    }
}

var uiSchema = {
    "_id":{
        "ui:readonly": true
    },
    "adapter":{
        "ui:placeholder":"Choose the Adapter..."
    },
    "additionalProperties":{
        "ui:widget":"textarea"
    },
    "updatedAt":{
        "ui:widget":"date-time",
        "ui:readonly": true
    },
    "createdAt":{
        "ui:widget":"date-time",
        "ui:readonly": true
    }
}

class EditDataSource extends Component {
    constructor(props) {
        super(props);
        props.match.params.id
        this.state = {
            schema: defaultSchema,
            uiSchema: uiSchema,
            adapters:[],
            datasource: {},
            editing: props.match.params.id ? true : false,
        }

        this.selectedAdapter = null;
    }

    componentWillMount() {
        AdapterService.getAll().then((adapters) => {
            var enumList = [], enumNames = [];
            adapters.forEach((adapter) => {
                enumList.push(adapter.name);
                enumNames.push(adapter.displayName);
            });

            this.setState({
                adapters,
                schema: {
                    ...this.state.schema,
                    properties:{
                        ...this.state.schema.properties,
                        "adapter": {
                            "type": "string",
                            "title": "Adapter",
                            "enum": enumList,
                            "enumNames":enumNames
                        }
                    }
                }
            });
        }).then(() => {
            if(this.state.editing){
                DataSourceService.get(this.props.match.params.id).then((datasource) => {
                    this.setState({
                        datasource
                    });
                    this.updateAdapterProperties(datasource);
                });
            }
        });
    }

    onFormChange = (event)=>{
        let datasource = event.formData;
        this.setState({datasource});
        if(this.selectedAdapter !== datasource.adapter){
            this.updateAdapterProperties(datasource);
        }
    }

    updateAdapterProperties = (datasource)=>{
        this.selectedAdapter = datasource.adapter;
        let adapter = this.state.adapters.find((adapter) => {
            return adapter.name === this.selectedAdapter;
        });
        
        if(typeof adapter !== "undefined"){
            this.setState({schema:{
                    ...this.state.schema,
                    properties:{
                        ...this.state.schema.properties,
                        dataSourceProperties: adapter.dataSourcePropertiesSchema
                    }
                }
            });
        }
    }

    onFormSubmit = (event)=>{
        let data = JSON.stringify(this.state.datasource);
        let promise;
        if(this.state.editing){
            promise = DataSourceService.patch(this.props.match.params.id, data);
        }else{
            promise = DataSourceService.post(data);
        }
        promise.then((result) => {
            alertify.notify(`${this.state.datasource.name} saved with success!`,'success');
            this.props.history.push('/datasources');
        }).catch((error) => {
            alertify.notify(`Error: ${error}`,'error');
        });
    }

    cancelForm = ()=>{
        this.props.history.push('/datasources');
    }

    render() {
        var text = "New";
        if(this.props.match.params.id){
            text = "Edit";
        }
        return (
            <div>
                <div className="page-header">
                    <h1>{text} DataSource</h1>
                </div>
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    onSubmit={this.onFormSubmit}
                    onChange={this.onFormChange}
                    formData={this.state.datasource}
                >
                <ButtonToolbar>
                    <Button bsStyle="primary" type="submit">Submit</Button>
                    <Button onClick={this.cancelForm}>Cancel</Button>
                </ButtonToolbar>
                </Form>
            </div>
        );
    }
}


export default EditDataSource;