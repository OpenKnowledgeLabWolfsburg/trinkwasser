import React, { Component } from 'react';
import { withTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { Select, MenuItem, AppBar, Tabs, Tab, withStyles, Card, Grid } from '@material-ui/core';

import CityRest from "../../../services/CityRest";
import DistrictRest from "../../../services/DistrictRest";
import DataRest from "../../../services/DataRest";
import AllTable from '../../../commons/table/AllTable';
import HomeStyles from './HomeStyles';
import { compose } from 'recompose';
import IngerientLevel from './IngerientLevel';

class HomeAll extends Component {

    state = {
        cities: [],
        currentCity: null,
        districtsForCity: [],
        currentDistrict: null,
        latestDataForDistrict: [],
        currentIngredientIndex: 0
    }

    cityRest = new CityRest();
    districtRest = new DistrictRest();
    dataRest = new DataRest();

    componentDidMount() {

        const t = this.props.t;

        this.columns = [
            { title: t('data.natrium'), field: 'natrium' },
            { title: t('data.potassium'), field: 'potassium' },
            { title: t('data.calcium'), field: 'calcium' },
            { title: t('data.magnesium'), field: 'magnesium' },
            { title: t('data.chloride'), field: 'chloride' },
            { title: t('data.nitrate'), field: 'nitrate' },
            { title: t('data.sulfate'), field: 'sulfate' },
            { title: t('data.hardness'), field: 'hardness' },
        ];

        this.cityRest.findAll().then(
            response => {
                let currentCity = null;
                if (response.data.length > 0) {
                    currentCity = response.data[0];
                }
                this.setState({ cities: response.data, currentCity })
            }, err => console.error(err));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentCity && this.state.currentCity !== prevState.currentCity) {
            this.districtRest.findByCity(this.state.currentCity).then(
                response => {
                    let currentDistrict = null;
                    if (response.data.length > 0) {
                        currentDistrict = response.data[0];
                    }
                    this.setState({ districtsForCity: response.data, currentDistrict })
                }, err => console.error(err));
        } else if (this.state.currentDistrict && this.state.currentDistrict !== prevState.currentDistrict) {
            this.dataRest.findByDistrict(this.state.currentDistrict).then(
                response => {
                    this.setState({ latestDataForDistrict: response.data })
                }, err => console.error(err));
        }
    }

    render() {

        const { currentCity, currentDistrict, currentIngredientIndex, latestDataForDistrict, cities, districtsForCity } = this.state;
        const { t, classes } = this.props;

        const currentColumn = this.columns ? this.columns[currentIngredientIndex] : null;

        return (
            <React.Fragment>
                <Typography className={classes.grow1} variant="h1" color="primary">{t('home.title')}</Typography>
                <Grid container className={classes.grow1}>
                    {currentCity &&
                        <Grid item xs={2}>
                            <Select
                                id={"input-city"}
                                label={t("city.name")}
                                value={currentCity}
                                onChange={this.setCurrentCity}
                            >
                                {cities.map(item => <MenuItem key={"" + item.id + "-" + item.name} value={item}>{item.name}</MenuItem>)}
                            </Select>
                        </Grid>
                    }
                    {currentDistrict &&
                        <Grid item xs={2}>
                            <Select
                                id={"input-district"}
                                label={t("district.name")}
                                value={currentDistrict}
                                onChange={this.setCurrentDistrict}
                            >
                                {districtsForCity.map(item => <MenuItem key={"" + item.id + "-" + item.name} value={item}>{item.name}</MenuItem>)}
                            </Select>
                        </Grid>
                    }
                    <Grid item xs={8}></Grid>
                </Grid>
                {latestDataForDistrict.length > 0 &&
                    <Grid container direction={"column"} className={classes.mainField}>
                        <Grid item xs={12}>
                            <AppBar position="static">
                                <Tabs onChange={this.handleIngerientChange} className={classes.notChosenTab} value={currentIngredientIndex}>
                                    {this.columns.map((column, index) =>
                                        <Tab
                                            key={column.field}
                                            value={index}
                                            label={column.title}
                                        />
                                    )}
                                </Tabs>
                            </AppBar>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography
                                            key={currentColumn.field}
                                            className={classes.minorPadding}
                                            component="div"
                                            role="tabpanel">
                                            {t(currentColumn.field + ".description").split("\n").map(line => <div>{line}</div>)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <IngerientLevel />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                }
            </React.Fragment>
        );
    }

    setCurrentCity = event => {
        this.setState({ currentCity: event.target.value });
    }

    setCurrentDistrict = event => {
        this.setState({ currentDistrict: event.target.value })
    }

    handleIngerientChange = (event, newValue) => {
        this.setState({ currentIngredientIndex: newValue });
    }

}

export default compose(withStyles(HomeStyles), withTranslation())(HomeAll);
