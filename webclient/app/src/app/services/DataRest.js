import CrudRest from "./CrudRest";

class DataRest extends CrudRest {

    constructor() {
        super(window.location.pathname + "api/data");
    }

}

export default DataRest;
