import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DistrictAll from "./all/DistrictAll";
import DistrictSingle from "./single/DistrictSingle";

class DistrictMain extends Component {

  render() {

    return (
        <React.Fragment>
          <Route exact path="/district" component={DistrictAll}/>
          <Route exact path="/district/create" component={DistrictSingle}/>
          <Route exact path="/district/update/:id" component={DistrictSingle}/>
        </React.Fragment>
    );
  }
}

export default DistrictMain;
