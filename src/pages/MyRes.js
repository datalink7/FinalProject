import React, { Component } from "react";
import Axios from "axios";
import MyResItem from "./MyResItem";

class MyRes extends Component {
  state = {
    myRes: [],
  };
  getMyRes = () => {
    const url = "http://localhost:9000/matchplay/myres?member_id=";

    Axios.get(url + window.sessionStorage.getItem("id"))
      .then((res) => {
        this.setState({
          myRes: res.data,
        });
        console.log(this.state.myRes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getMyRes();
  }
  render() {
    return (
      <div>
        {window.sessionStorage.getItem("id")}
        {this.state.myRes.map((row, idx) => (
          <MyResItem row={row}></MyResItem>
        ))}
      </div>
    );
  }
}

export default MyRes;
