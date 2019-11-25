import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DataRest from "../../../services/DataRest";
import AllTable from "../../../commons/table/AllTable";


class DataAll extends Component {
    
    state = {
        isLoading: true,
        dataAll: [],
        selected: undefined,
        columns: []
    };
    
    dataRest = new DataRest();

    fetchAll = () => {
        this.dataRest.findAll().then(response => {
            this.setState({dataAll: response.data, isLoading: false});
        });
    };

    componentDidMount = () => {

        const {t} = this.props;

        const columns = [
            {title: t('city.name'), field: 'district.city.name'},
            {title: t('district.name'), field: 'district.name'},
            {title: t('data.natrium'), field: 'natrium'},
            {title: t('data.potassium'), field: 'potassium'},
            {title: t('data.calcium'), field: 'calcium'},
            {title: t('data.magnesium'), field: 'magnesium'},
            {title: t('data.chloride'), field: 'chloride'},
            {title: t('data.nitrate'), field: 'nitrate'},
            {title: t('data.sulfate'), field: 'sulfate'},
            {title: t('data.hardness'), field: 'hardness'},
        ];

        this.setState({columns: columns});
        this.fetchAll();
    };

    render() {

        const {t} = this.props;
        const {columns, dataAll, selected} = this.state;

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t('data.title')}</Typography>
                <Button onClick={this.goToCreate} variant="contained" color="primary">{t('button.create')}</Button>
                <Button onClick={this.goToUpdate} variant="contained" color="primary">{t('button.update')}</Button>
                <Button onClick={this.delete} variant="contained" color="primary">{t('button.delete')}</Button>
                <AllTable
                    entities={dataAll}
                    selected={selected}
                    onRowClick={this.rowClick}
                    columns={columns}/>
            </React.Fragment>
        );
    };

    goToCreate = () => {
        this.props.history.push("/data/create");
    };

    goToUpdate = () => {
        if (this.state.selected) {
            this.props.history.push("/data/update/" + this.state.selected.id);
            this.setState({selected: undefined});
        }
    };

    delete = () => {
        if (this.state.selected) {
            this.dataRest.delete(this.state.selected).then(this.fetchAll);
            this.setState({selected: undefined});
        }
    };

    rowClick = (data) => {
        this.setState({selected: data});
    };

}

export default withTranslation()(DataAll);
