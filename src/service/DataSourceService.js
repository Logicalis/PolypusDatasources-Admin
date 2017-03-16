import fetchJSON from '../helpers/fetchJSON';
import config from '../config';

var apiUrl = config.url;

class DataSourceService {
    static getAll(){
        return fetchJSON(`${apiUrl}/datasources`).then((data) => {
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