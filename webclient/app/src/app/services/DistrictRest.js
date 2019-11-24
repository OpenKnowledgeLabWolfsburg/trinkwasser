import CrudRest from "./CrudRest";

class DistrictRest extends CrudRest {

    constructor() {
        super(window.location.pathname + "api/district");
    }

}

export default DistrictRest;
