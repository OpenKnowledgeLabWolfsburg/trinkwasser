import CrudRest from "./CrudRest";

class CityRest extends CrudRest {

    constructor() {
        super(window.location.pathname + "api/city");
    }

}

export default CityRest;
