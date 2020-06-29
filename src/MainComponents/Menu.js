import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/MainStyle.css";
import LoginForm from "../pages/LoginForm";

const Menu = () => {
  return (
    <div className="Menu5">
      <div className="Menu1">
        <ul>
          <li>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Reservation" style={{ textDecoration: "none" }}>
              Match
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/League" style={{ textDecoration: "none" }}>
              League
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Team" style={{ textDecoration: "none" }}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/QnA" style={{ textDecoration: "none" }}>
              QnA
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Menu2">
        <ul>
          <li>
            <NavLink exact to="/Mypage" style={{ textDecoration: "none" }}>
              MyPage
            </NavLink>
          </li>
          <li style={{ width: "200px" }} align="right">
            {/* <NavLink exact to="/Login" style={{ textDecoration: 'none' }}>Login</NavLink> */}
            <LoginForm> </LoginForm>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
