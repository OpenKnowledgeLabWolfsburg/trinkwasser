import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
// Material UI Components
import { withStyles } from "@material-ui/core/styles";
// Page Components
import Home from "./home/HomeMain";
import CityMain from "./city/CityMain";
import DistrictMain from "./district/DistrictMain";
import DataMain from "./data/DataMain";

import MenuStyles from "../assets/styles/MenuStyles";

class MainContentRouter extends Component {

    render() {
        const { classes} = this.props;

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route
                        path="/city"
                        component={CityMain}/>
                    <Route
                        path="/district"
                        component={DistrictMain}/>
                    <Route
                        path="/data"
                        component={DataMain}/>
                    <Route
                        path="/"
                        component={Home}/>
                </Switch>
            </main>
        );
    }
}

export default withStyles(MenuStyles, { withTheme: true })(withRouter(MainContentRouter));
