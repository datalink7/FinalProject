import React,{Component} from 'react';
import '../Css/MainStyle.css'
import {NavLink} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import UserDelUpd from '../User/UserDelUpd';

const Account=()=>(
    <div>
                <div style={{position:'absolute',width:'230px',height:'683px',backgroundColor:'#503396',border:'3px'}}>
            <table style={{width:'300px',height:'550px',fontSize:'20pt',border:'2px',marginTop:'62px',marginLeft:'20px'}} className="TemaMenu">
                <tbody>
                    <tr>
                        <td align="center" width="200px">
                            <NavLink exact to="/Mypage" 
                            style={{ textDecoration: 'none',color:'white'}}>
                                <button type="button" name="Hover" className="button-container-2"
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>MyPage Main</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Mypage/Account" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Account</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Mypage/MyMatchHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Match History</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Mypage/PointHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Point History</button>
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{border:'3px solid red', position:'absolute',left:'400px'}}>
            <NavLink exact to="/Mypage/Account" style={{ textDecoration: 'none',color:'white'}}>
                <button type="button">회원정보수정/탈퇴</button>
            </NavLink>
            <NavLink exact to="/Mypage/Account/PwUpdate" style={{ textDecoration: 'none',color:'white'}}>
                <button type="button">비밀번호 변경</button>
            </NavLink>
            <UserDelUpd/>
        </div>
    </div>
)

export default Account