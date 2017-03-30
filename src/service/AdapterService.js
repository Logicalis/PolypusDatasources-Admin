import fetchJSON from '../helpers/fetchJSON';
import config from '../config';

var apiUrl = config.getUrl();

class AdapterService {
    static getAll(){
        return fetchJSON(`${apiUrl}/adapters`).then((data) => {
            return data.json;
        });
    }

    static getCount(){
        return this.getAll().then((json) => {
            return json.length;
        });
    }
};

export default AdapterService;