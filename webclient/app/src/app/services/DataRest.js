import CrudRest from "./CrudRest";
import axios from "axios";

class DataRest extends CrudRest {

    constructor() {
        super(window.location.pathname + "api/data");
    }

    findByDistrict = (district)  => {
        return axios.get(window.location.pathname + "api/district/" + district.id + "/data");
    }

}

export default DataRest;
