import fetchJSON from '../helpers/fetchJSON';
import config from '../config';

var apiUrl = config.url;

class DataSourceService {
    static getAll(){
        return fetchJSON(`${apiUrl}/datasources`).then((data) => {
            return data.json;
        });
    }

    static get(id){
        return fetchJSON(`${apiUrl}/datasources/${id}`).then((data) => {
            return data.json;
        });
    }

    static post(data){
        return fetchJSON(`${apiUrl}/datasources`,{
            method: "POST",
            body: data
        }).then((data) => {
            return data.json;
        });
    }

    static delete(id){
        return fetchJSON(`${apiUrl}/datasources/${id}`,{
            method: "DELETE"
        });
    }

    static patch(id,data){
        return fetchJSON(`${apiUrl}/datasources/${id}`,{
            method: "PATCH",
            body: data
        }).then((data) => {
            return data.json;
        });
    }

    static getCount(){
        return fetchJSON(`${apiUrl}/datasources/count`).then((data) => {
            return data.json.count;
        });
    }
};

export default DataSourceService;