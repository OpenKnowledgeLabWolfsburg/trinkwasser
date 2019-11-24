import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CityAll from "./all/CityAll";
import CitySingle from "./single/CitySingle";

class CityMain extends Component {

  render() {

    return (
        <React.Fragment>
          <Route exact path="/city" component={CityAll}/>
          <Route exact path="/city/create" component={CitySingle}/>
          <Route exact path="/city/update/:id" component={CitySingle}/>
        </React.Fragment>
    );
  }
}

export default CityMain;
