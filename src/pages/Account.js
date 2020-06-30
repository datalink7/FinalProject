import React, { Component } from "react";
import "../Css/MainStyle.css";
import { NavLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import UserInfo from "../User/UserInfo";
import MyPageSidebar from "./MyPageSidebar";

const Account = () => (
  <div>
    <MyPageSidebar></MyPageSidebar>
    <div
      style={{ border: "3px solid red", position: "absolute", left: "400px" }}
    >
      <NavLink
        exact
        to="/Mypage/Account"
        style={{ textDecoration: "none", color: "white" }}
      >
        <button type="button">회원정보수정/탈퇴</button>
      </NavLink>
      <NavLink
        exact
        to="/Mypage/Account/PwdCheck"
        style={{ textDecoration: "none", color: "white" }}
      >
        <button type="button">비밀번호 변경</button>
      </NavLink>
      <UserInfo />
    </div>
  </div>
);

export default Account;
