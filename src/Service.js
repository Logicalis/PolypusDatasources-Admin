import fetchJSON from './helpers/fetchJSON';

var apiUrl = 'http://localhost:4000/api';

export default class Service {
    getAdapters(){
        return fetchJSON(`${apiUrl}/adapters`);
    }
};