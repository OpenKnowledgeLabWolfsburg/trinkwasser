import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DistrictRest from "../../../services/DistrictRest";
import AllTable from "../../../commons/table/AllTable";


class DistrictAll extends Component {
    
    state = {
        isLoading: true,
        districtAll: [],
        selected: undefined,
        columns: []
    };
    
    districtRest = new DistrictRest();

    fetchAll = () => {
        this.districtRest.findAll().then(response => {
            this.setState({districtAll: response.data, isLoading: false});
        });
    };

    componentDidMount = () => {

        const {t} = this.props;

        const columns = [
            {title: t('district.name'), field: 'name'},
            {title: t('city.name'), field: 'city.name'}  
        ];

        this.setState({columns: columns});
        this.fetchAll();
    };

    render() {

        const {t} = this.props;
        const {columns, districtAll, selected} = this.state;

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t('district.title')}</Typography>
                <Button onClick={this.goToCreate} variant="contained" color="primary">{t('button.create')}</Button>
                <Button onClick={this.goToUpdate} variant="contained" color="primary">{t('button.update')}</Button>
                <Button onClick={this.delete} variant="contained" color="primary">{t('button.delete')}</Button>
                <AllTable
                    entities={districtAll}
                    selected={selected}
                    onRowClick={this.rowClick}
                    columns={columns}/>
            </React.Fragment>
        );
    };

    goToCreate = () => {
        this.props.history.push("/district/create");
    };

    goToUpdate = () => {
        if (this.state.selected) {
            this.props.history.push("/district/update/" + this.state.selected.id);
            this.setState({selected: undefined});
        }
    };

    delete = () => {
        if (this.state.selected) {
            this.districtRest.delete(this.state.selected).then(this.fetchAll);
            this.setState({selected: undefined});
        }
    };

    rowClick = (district) => {
        this.setState({selected: district});
    };

}

export default withTranslation()(DistrictAll);
