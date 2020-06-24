import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Empty from '../image/img.png'
import '../Css/MainStyle.css'
import { Scrollbars } from 'react-custom-scrollbars';
import ReactDOM from 'react-dom';


const TeamHome=()=>(
    <div>
        <div style={{position:'absolute',width:'230px',height:'683px',backgroundColor:'#503396',border:'3px'}}>
            <table style={{width:'300px',height:'550px',fontSize:'20pt',border:'2px',marginTop:'62px',marginLeft:'20px'}} className="TemaMenu">
                <tbody>
                    <tr>
                        <td align="center" width="200px">
                            <NavLink exact to="/Team/TeamHome" 
                            style={{ textDecoration: 'none',color:'white'}}>
                                <button type="button" name="Hover" className="button-container-2"
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Team Main</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Team/TeamHome/TeamMember" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>TeamMember</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Team/TeamHome/MatchHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>MatchHistory</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Team/TeamHome/TeamBoard" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>TeamBoard</button>
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>  
        <Scrollbars className="scroll2" style={{width:'1210px', height:'680px', border:'5px solid yellow',left:'500px'}}>
            <div style={{position:"absolute", top:'0px',backgroundColor:'#503396',width:'1200px'}}>
            <img src={Empty} alt="" style={{width:'250px'}}/>
            <div style={{position:"absolute",left:'280px', top:'20px',backgroundColor:'#503396',width:''}}>
                <b style={{fontSize:'25pt',color:'white',marginLeft:'0'}}>토트넘 홋스퍼 FC</b><br/>
                <b style={{color:'white',marginLeft:'0'}}>팀 등록일 2019-10-18</b><br/>
                <hr style={{borderColor:'white'}}/>
                <table className="THomeMain" style={{width:'350px', color:'white',height:'120px'}}>
                        <tbody>
                            <b style={{marginLeft:'0'}}>팀 전적</b>
                            <tr style={{border:'1px solid white'}}>
                                <td align="center" style={{width:'60px'}}>
                                    <b>총</b>
                                </td >
                                <td align="center" style={{width:'60px'}}>
                                    <b>승</b>
                                </td >
                                <td align="center" style={{width:'60px'}}>
                                    <b>패</b>
                                </td>
                                <td align="center" style={{width:'60px'}}>
                                    <b>무</b>
                                </td>
                                <td align="center" style={{width:'70px'}}>
                                    <b>승률</b>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <b>29</b>
                                </td>
                                <td align="center">
                                    <b>11</b>
                                </td>
                                <td align="center">
                                    <b>8</b>
                                </td>
                                <td align="center">
                                    <b>10</b>
                                </td>
                                <td align="center">
                                    <b>83%</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div style={{position:'absolute', left:'700px', top:'20px'}}>
                <b style={{fontSize:'13pt',color:'white',marginLeft:'0'}}>팀 장</b>
                <b style={{fontSize:'13pt',color:'white',marginLeft:'0'}}> / 현재 팀원 10명</b><br/>
                <b style={{fontSize:'20pt',color:'white',marginLeft:'0'}}>미스타손</b>
                <b style={{fontSize:'13pt',color:'white',position:'absolute',left:'270px', top:'40px'}}>메세지 보내기</b>
                <hr style={{borderColor:'white'}}/>
                <b style={{fontSize:'13pt',color:'white',marginLeft:'0'}}>팀 소개</b><br/>
                <textarea readOnly style={{width:'400px',height:'100px',fontSize:'13pt',borderRadius:'10px'}}>
                    서울에서 활발히 활동하는 팀입니다.
                    월 2회 이상 참여 가능하신 분만 신청!! 
                    비매너 플레이 적발 시 강퇴합니다.
                </textarea>
            </div>
        </div>
        </Scrollbars>
    </div>
)

export default TeamHome