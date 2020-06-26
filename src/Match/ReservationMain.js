import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SelectPlace from "./SelectPlace";
import SelectDetail from "./SelectDetail";
import SelectTeam from "./SelectTeam";
import ResultRes from "./ResultRes";
import AddPlace from "./AddPlace";

class ReservationMain extends Component {
  render() {
    return (
      <div align="center">
        <Switch>
          <Route path="/Reservation" component={SelectTeam} />
          <Route path="/SelectPlace/:type" component={SelectPlace} />
          <Route path="/SelectDetail/" component={SelectDetail} />
          <Route path="/ResultRes/" component={ResultRes} />
          <Route path="/AddPlace/" component={AddPlace} />
        </Switch>
      </div>
    );
  }
}

export default ReservationMain;
