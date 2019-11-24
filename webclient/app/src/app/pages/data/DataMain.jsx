import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DataAll from "./all/DataAll";
import DataSingle from "./single/DataSingle";

class DataMain extends Component {

  render() {

    return (
        <React.Fragment>
          <Route exact path="/data" component={DataAll}/>
          <Route exact path="/data/create" component={DataSingle}/>
          <Route exact path="/data/update/:id" component={DataSingle}/>
        </React.Fragment>
    );
  }
}

export default DataMain;
