import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import "./HomeAll.css";

import homePicture from "../../../assets/images/home.png";

class HomeAll extends Component {

    render() {

        const t = this.props.t;

        return (
            <React.Fragment>
                <Typography variant="h1" color="primary">{t('home.title')}</Typography>
                <img className="Home-img" src={homePicture} alt="home" />
            </React.Fragment>
        );
    }

}

export default withTranslation()(HomeAll);
