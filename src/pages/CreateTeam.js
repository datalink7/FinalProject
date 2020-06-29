import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Empty from '../image/img.png'
import '../Css/MainStyle.css'
import { Scrollbars } from 'react-custom-scrollbars';
import ReactDOM from 'react-dom';

const CreateTeam=()=>(
    <div align="center">
        {/* <b style={{fontSize:'25pt', marginLeft:'-800px'}}>팀 생성하기</b> */}
        <table className="CreatTable" style={{fontSize:'20pt', border:'2px', width:'1200px',marginTop:'65px',marginLeft:'100px'}}>
            <tbody>
                <tr>
                    <td width="350px" height="90px" align="center" style={{backgroundColor:'#503396',border:'1px solid white',color:'white',fontWeight:'bold',textShadow:'3px 3px 3px black',borderRadius:'10px'}}>팀명</td>
                    <td><input type="text" className="Input1" /></td>
                </tr>
                <tr>
                    <td align="center" height="90px" style={{backgroundColor:'#503396',border:'1px solid white',color:'white',fontWeight:'bold',textShadow:'3px 3px 3px black',borderRadius:'10px'}}>팀 로고</td>
                    <td><input type="file" className="Input1"/></td>
                </tr>
                <tr>
                    <td align="center" height="90px" style={{backgroundColor:'#503396',border:'1px solid white',color:'white',fontWeight:'bold',textShadow:'3px 3px 3px black',borderRadius:'10px'}}>선호 지역</td>
                    <td>
                        <select className="Input1">
                            <option>서울</option>
                            <option>경기</option>
                            <option>인천</option>
                            <option>대전</option>
                            <option>대구</option>
                            <option>부산</option>
                            <option>울산</option>
                            <option>광주</option>
                            <option>강원</option>
                            <option>세종</option>
                            <option>충북</option>
                            <option>경남</option>
                            <option>전북</option>
                            <option>전남</option>
                            <option>제주</option>
                            <option>전국</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="center" height="90px" style={{backgroundColor:'#503396',border:'1px solid white',color:'white',fontWeight:'bold',textShadow:'3px 3px 3px black',borderRadius:'10px'}}>연령대</td>
                    <td>
                        <select className="Input1">
                            <option>10대</option>
                            <option>20대</option>
                            <option>30대</option>
                            <option>40대</option>
                            <option>50대</option>
                            <option>60대</option>
                            <option>70대</option>
                            <option>80대</option>
                            <option>90대</option>
                            <option>100대</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="center" height="90px" style={{backgroundColor:'#503396',border:'1px solid white',color:'white',fontWeight:'bold',textShadow:'3px 3px 3px black',borderRadius:'10px'}}>팀 소개</td>
                    <td>
                        <textarea className="Input2" ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr style={{marginTop:'45px'}}/>

        <NavLink to="/Team/CreateTeam/Success" style={{ textDecoration: 'none',fontSize:'15pt' }}>
            <button style={{marginTop:'30px',width:'150px', height:'40px',backgroundColor:'black',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>작성 완료</button>
        </NavLink>  
    </div>
)

export default CreateTeam