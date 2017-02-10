import React from 'react';

import { Field } from 'redux-form';
import { Labeled, LongTextInput } from 'admin-on-rest/lib/mui';

export const JsonInput = (props) => (
    <span>
        <Field name={props.attr} component={LongTextInput} format={(value,name)=>{
            return JSON.stringify(value, null, 2);
        }} />
    </span>
);