import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import CityRest from "../../../services/CityRest";
import AddUpdateForm from "../../../commons/form/AddUpdateForm";
import Typography from "@material-ui/core/Typography";

import {withTranslation} from "react-i18next";

class CitySingle extends Component {

    state = {
        city: {
            name: ""}
        ,
        titleKey: ""
    };

    cityRest = new CityRest();

    attributes = [
    {name: "name", type: "string"}    ];

    componentDidMount = () => {
        let updateResult = this.checkUpdate();
        this.submitFunction = updateResult.submitFunction;
        this.setState({titleKey: updateResult.titleKey});
    };

    render() {

        const {t} = this.props;

        if (!this.state.city) {
            return (<div>Loading...</div>);
        }

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t(this.state.titleKey, {entity: t('city')})}</Typography>
                <AddUpdateForm
                    entity={this.state.city}
                    attributes={this.attributes}
                    prefix='city'
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </React.Fragment>
        );
    }

    checkUpdate() {
        let func;
        let titleKey = "";
        if (this.props.match.params.id === undefined) {
            func = this.cityRest.create;
            titleKey = "form.create";
        } else {
            this.cityRest.findById(this.props.match.params.id).then(response => this.setCity(response.data));
            func = this.cityRest.update;
            titleKey = "form.update";
        }
        return {submitFunction: func, titleKey: titleKey};
    };

    setCity = (data) => {
        this.setState({
            city: data
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let city = this.state.city;
        city[name] = value;

        this.setState({
            city: city
        });
    };

    handleSubmit = (event) => {

        //turn off page relaod
        event.preventDefault();

        let city = this.state.city;

        this.attributes.forEach(attribute => {
           if (attribute.type === "time") {
               let date = new Date("1970-01-01T" + this.state.city[attribute.name]);
               city[attribute.name] = date.toISOString();
           }
        });

        this.submitFunction(city).then(this.goBack);
    };

    goBack = () => {
        this.props.history.push("/city");
    };

}

export default withTranslation()(withRouter(CitySingle));
