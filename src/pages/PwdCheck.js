import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/MainStyle.css'

const PwdCheck=()=>(
    <div align="center">
        <table style={{border:'2px solid rgba(0,0,0,.1)',marginTop:'160px'}}>
            <tbody>
                <tr height="80px">
                    <td align="center" style={{fontSize:'20pt',width:'400px'}}>
                        <br/>현재 비밀번호를 입력해주세요.
                    </td>
                </tr>
                <tr height="50px">
                    <td align="center">
                        <input type="password" style={{width:'370px',height:'40px',marginTop:'30px',border:'2px solid Gainsboro'}}/>
                    </td>
                </tr>
                <tr height="100px">
                    <td align="center">
                        <NavLink exact to="/Mypage/Account/PwdCheck/PwdChange" style={{ textDecoration: 'none',color:'white',fontSize:'20pt'}}>
                            <button type="button" 
                                style={{width:'150px', height:'50px',backgroundColor:'black', border:'2px solid white',borderRadius:'10px',boxShadow:'3px 3px 3px 0px gray'}}>확인</button>
                        </NavLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default PwdCheck