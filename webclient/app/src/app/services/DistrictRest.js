import CrudRest from "./CrudRest";
import axios from "axios";

class DistrictRest extends CrudRest {

    constructor() {
        super(window.location.pathname + "api/district");
    }
    
    findByCity = (city)  => {
        return axios.get(window.location.pathname + "api/city/" + city.id + "/district");
    }

}

export default DistrictRest;
