import React, { Component } from "react";
import Logo from "../image/logo.png";

class LeagueRankRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.idx + 1}</td>
        <td align="left" style={{ paddingLeft: "15px" }}>
          {this.props.idx === 0 && <span>&#129351;</span>}
          {this.props.idx === 1 && <span>&#129352;</span>}
          {this.props.idx === 2 && <span>&#129353;</span>}
          <img
            src={this.props.row.team_win} //팀로고로 교체
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = Logo;
            }}
            style={{ height: "21px" }}
            alt=""
          ></img>
          {this.props.row.league_team_name}
        </td>
        <td>
          {this.props.row.team_win +
            this.props.row.team_draw +
            this.props.row.team_lose}
        </td>
        <td>{this.props.row.team_win}</td>
        <td>{this.props.row.team_draw}</td>
        <td>{this.props.row.team_lose}</td>
        <td>{this.props.row.team_score}</td>
      </tr>
    );
  }
}

export default LeagueRankRow;
