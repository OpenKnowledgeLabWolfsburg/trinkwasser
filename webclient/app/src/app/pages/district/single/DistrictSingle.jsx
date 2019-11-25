import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import DistrictRest from "../../../services/DistrictRest";
import AddUpdateForm from "../../../commons/form/AddUpdateForm";
import Typography from "@material-ui/core/Typography";

import {withTranslation} from "react-i18next";

import CityRest from "../../../services/CityRest";

class DistrictSingle extends Component {

    state = {
        district: {
            name: "",
            city: null    
        },
        attributes: [
            {name: "name", type: "string"},
            {name: "city", type: "select", items: []}
        ],
        titleKey: ""
    };

    districtRest = new DistrictRest();

    componentDidMount = () => {
        let updateResult = this.checkUpdate();
        this.submitFunction = updateResult.submitFunction;

        let cityRest = new CityRest();
        cityRest.findAll().then(
            response => {
                let attributes = this.state.attributes;
                attributes[1].items = response.data;
                this.setState({attributes, titleKey: updateResult.titleKey})
            }, 
            err => console.error(err)
        );
    };

    render() {

        const {t} = this.props;

        if (!this.state.district) {
            return (<div>Loading...</div>);
        }

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t(this.state.titleKey, {entity: t('district')})}</Typography>
                <AddUpdateForm
                    entity={this.state.district}
                    attributes={this.state.attributes}
                    prefix='district'
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
            func = this.districtRest.create;
            titleKey = "form.create";
        } else {
            this.districtRest.findById(this.props.match.params.id).then(response => this.setDistrict(response.data));
            func = this.districtRest.update;
            titleKey = "form.update";
        }
        return {submitFunction: func, titleKey: titleKey};
    };

    setDistrict = (data) => {
        this.setState({
            district: data
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let district = this.state.district;
        district[name] = value;

        this.setState({
            district: district
        });
    };

    handleSubmit = (event) => {

        //turn off page relaod
        event.preventDefault();

        let district = this.state.district;

        this.submitFunction(district).then(this.goBack);
    };

    goBack = () => {
        this.props.history.push("/district");
    };

}

export default withTranslation()(withRouter(DistrictSingle));
