// class representing the Data entity
class Data {

    constructor(data) {
        this.id = data.id;
        this.sulfate = data.sulfate;
        this.chloride = data.chloride;
        this.hardness = data.hardness;
        this.natrium = data.natrium;
        this.nitrate = data.nitrate;
        this.magnesium = data.magnesium;
        this.calcium = data.calcium;
        this.potassium = data.potassium;
    }
}

export default Data;