import React from 'react';

import { List, Edit, Datagrid, TextField, EditButton, DisabledInput, SimpleForm,

 } from 'admin-on-rest/lib/mui';

import {JsonInput} from './helpers/jsonInput'

export const AdapterList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="displayName" />
            <EditButton />
        </Datagrid>
    </List>
);

const AdapterTitle = ({ record }) => {
    return <span>{record ? `${record.displayName} - Adapter` : ''}</span>;
};

export const AdapterEdit = (props)=>(
     <Edit title={<AdapterTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="name" />
            <DisabledInput source="displayName" />
            <JsonInput addLabel label="dataSourcePropertiesSchema" attr="dataSourcePropertiesSchema"/>
            <JsonInput addLabel label="queryPropertiesSchema" attr="queryPropertiesSchema"/>
            {/*<DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />*/}
        </SimpleForm>
    </Edit>
);