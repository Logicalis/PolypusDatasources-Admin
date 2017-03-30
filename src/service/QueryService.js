import fetchJSON from '../helpers/fetchJSON';
import config from '../config';

var apiUrl = config.getUrl();

class QueryService {
    static getAll(){
        return fetchJSON(`${apiUrl}/queries`).then((data) => {
            return data.json;
        });
    }

    static get(id){
        return fetchJSON(`${apiUrl}/queries/${id}`).then((data) => {
            return data.json;
        });
    }

    static post(data){
        return fetchJSON(`${apiUrl}/queries`,{
            method: "POST",
            body: data
        }).then((data) => {
            return data.json;
        });
    }

    static delete(id){
        return fetchJSON(`${apiUrl}/queries/${id}`,{
            method: "DELETE"
        });
    }

    static patch(id,data){
        return fetchJSON(`${apiUrl}/queries/${id}`,{
            method: "PATCH",
            body: data
        }).then((data) => {
            return data.json;
        });
    }

    static getCount(){
        return fetchJSON(`${apiUrl}/queries/count`).then((data) => {
            return data.json.count;
        });
    }
};

export default QueryService;