import React, { Component } from "react";

class MyResItem extends Component {
  render() {
    let team = "";
    if (
      this.props.row.home_member_id.includes(
        window.sessionStorage.getItem("id")
      )
    ) {
      team = "홈팀";
    } else {
      team = "원정팀";
    }
    return (
      <div>
        <div className="txt5" align="center">
          {"소속팀 = " + team}
          <br></br>
          {"Home " +
            this.props.row.res_team1goal +
            " : " +
            this.props.row.res_team2goal +
            " Away"}
          <br></br>
          {"장소 = " + this.props.row.place_name}
          <br></br>
          {"주소 = " + this.props.row.place_addr}
          <br></br>
          {"경기일 = " + this.props.row.res_time}
          <br></br>
          {"경기시간 = " +
            this.props.row.time_val.substring(0, 2) +
            "~" +
            this.props.row.time_val.substring(2, 4)}
          <br></br>
          경기 타입 = {this.props.row.res_type === "0" ? "개인" : "팀"}
          <br></br>
          진행여부 = {this.props.row.res_status === "0" ? "미진행" : "진행"}
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default MyResItem;
