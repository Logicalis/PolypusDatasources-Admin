import React, { Component } from 'react';
import { render } from "react-dom";

import Form from "react-jsonschema-form";

var defaultSchema = {
    "title":"New DataSource",
    "type": "object",
    "required": ["name","adapter"],
    "properties":{
        "name": {
            "type": "string",
            "title": "Name"
        },
        "adapter": {
            "type": "string",
            "title": "Adapter"
        },
        "dataSourceProperties":{
            "type": "object",
            "title": "DataSource Properties"
        },
        "additionalProperties":{
            "type": "object",
            "title": "Additional Properties"
        }
    }
}

class EditDataSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: defaultSchema
        }
    }

    componentWillMount() {
        // this.setState({
        //     schema: {
                
        //     }
        // });
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        // console.log(this.props.match.params.id);
        return (
            <div>
                <Form schema={this.state.schema}
                    onSubmit={()=>{console.log("submit")}}
                    onChange={()=>{console.log("Changed")}}
                />
            </div>
        );
    }
}


export default EditDataSource;