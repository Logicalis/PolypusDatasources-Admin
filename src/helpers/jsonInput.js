import React, { Component } from 'react';

import { Field } from 'redux-form';
import { Labeled, LongTextInput, TextField } from 'admin-on-rest/lib/mui';

export class JsonInput extends Component {
    
    render(){
        console.log(this.props);
        return <span>
        {/*<Field name={props.attr} component={LongTextInput} 
        format={(value,name)=>{
            return JSON.stringify(value, null, 2);
        }} 
        parse={(value,name)=>{
            return JSON.parse(value);
        }}*/}
        {/*/>*/}
    </span>
    }
    
};