import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import DataRest from "../../../services/DataRest";
import AddUpdateForm from "../../../commons/form/AddUpdateForm";
import Typography from "@material-ui/core/Typography";

import {withTranslation} from "react-i18next";
import DistrictRest from '../../../services/DistrictRest';

class DataSingle extends Component {

    state = {
        data: {
            sulfate: "",
            chloride: "",
            hardness: "",
            natrium: "",
            nitrate: "",
            magnesium: "",
            calcium: "",
            potassium: "",
            district: null
        },
        attributes: [
            {name: "sulfate", type: "number", inputProps: {step: "0.01"}},
            {name: "chloride", type: "number", inputProps: {step: "0.01"}},
            {name: "natrium", type: "number", inputProps: {step: "0.01"}},
            {name: "nitrate", type: "number", inputProps: {step: "0.01"}},
            {name: "magnesium", type: "number", inputProps: {step: "0.01"}},
            {name: "calcium", type: "number", inputProps: {step: "0.01"}},
            {name: "potassium", type: "number", inputProps: {step: "0.01"}},
            {name: "hardness", type: "string"},
            {name: "district", type: "select", items: []}
        ],
        titleKey: ""
    };

    dataRest = new DataRest();

    componentDidMount = () => {
        let updateResult = this.checkUpdate();
        this.submitFunction = updateResult.submitFunction;

        let districtRest = new DistrictRest();

        districtRest.findAll().then(
            response => {
                let attributes = this.state.attributes;
                attributes[8].items = response.data;
                this.setState({attributes, titleKey: updateResult.titleKey})
            }, 
            err => {console.error(err)}
        );

        this.setState({titleKey: updateResult.titleKey});
    };

    render() {

        const {t} = this.props;

        if (!this.state.data) {
            return (<div>Loading...</div>);
        }

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t(this.state.titleKey, {entity: t('data')})}</Typography>
                <AddUpdateForm
                    entity={this.state.data}
                    attributes={this.state.attributes}
                    prefix='data'
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
            func = this.dataRest.create;
            titleKey = "form.create";
        } else {
            this.dataRest.findById(this.props.match.params.id).then(response => this.setData(response.data));
            func = this.dataRest.update;
            titleKey = "form.update";
        }
        return {submitFunction: func, titleKey: titleKey};
    };

    setData = (data) => {
        this.setState({
            data: data
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let data = this.state.data;
        data[name] = value;

        this.setState({
            data: data
        });
    };

    handleSubmit = (event) => {

        //turn off page relaod
        event.preventDefault();

        let data = this.state.data;

        this.submitFunction(data).then(this.goBack);
    };

    goBack = () => {
        this.props.history.push("/data");
    };

}

export default withTranslation()(withRouter(DataSingle));
