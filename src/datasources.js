import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput,
    DateField    
 } from 'admin-on-rest/lib/mui';

import {JsonInput} from './helpers/jsonInput'

export const DataSourceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="_id" label="ID"/>
            <TextField source="name" />
            <ReferenceField source="adapter" reference="adapters">
                <TextField source="displayName"/>
            </ReferenceField>
            {/*<FunctionField source="dataSourceProperties"/>*/}
            <DateField source="createdAt" showTime/>
            <DateField source="updatedAt" showTime/>
            <EditButton />
        </Datagrid>
    </List>
);

const DataSourceTitle = ({ record }) => {
    return <span>DataSource {record ? `"${record.name}"` : ''}</span>;
};

export const DataSourceEdit = (props) => (
    <Edit title={<DataSourceTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <ReferenceInput label="Adapter" source="adapter" reference="adapters">
                <SelectInput optionText="displayName" />
            </ReferenceInput>
            <JsonInput addLabel label="DataSource Properties" attr="dataSourceProperties"/>
            <DisabledInput source="createdAt" />
            <DisabledInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const DataSourceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Adapter" source="adapter" reference="adapters">
                <SelectInput optionText="displayName" />
            </ReferenceInput>
            <JsonInput addLabel label="DataSource Properties" attr="dataSourceProperties"/>
        </SimpleForm>
    </Create>
);