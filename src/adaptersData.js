import restClient from './restClient';

import {
    GET_LIST
} from './helpers/types';



export default function(url){
    var client = restClient('http://localhost:4000/api');

    return client(GET_LIST,"adapters",{pagination:{}, sort: {}}).then((res) => {
        var adapters = {}
        res.data.forEach(function(element) {
            adapters[element.name] = element;
        }, this);
        return adapters;
    });
};