import React,{Component} from 'react';
import Empty from '../image/img.png'
import '../Css/MainStyle.css'
import { Scrollbars } from 'react-custom-scrollbars';

const TeamHome=()=>(
    <div>
        <Scrollbars className="scroll2" style={{width:'1700px', height:'680px', border:'5px solid yellow'}}>
        <div style={{border:'1px solid red',width:'400px',height:'600px'}}>
            <table style={{width:'400px',height:'600px',fontSize:'20pt'}}>
                <tbody>
                    <tr>
                        <td align="center">Team Main</td>
                    </tr>
                    <tr>
                        <td align="center">Team Member</td>
                    </tr>
                    <tr>
                        <td align="center">Match History</td>
                    </tr>
                    <tr>
                        <td align="center">Team Photo</td>
                    </tr>
                    <tr>
                        <td align="center">Team Board</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{position:"absolute",left:'410px', top:'0px',backgroundColor:'#503396',width:'1280px'}}>
            <img src={Empty} alt="" style={{width:'250px'}}/>
            <div style={{position:"absolute",left:'280px', top:'20px',backgroundColor:'#503396',width:''}}>
            <b style={{fontSize:'25pt',color:'white'}}>토트넘 홋스퍼 FC</b>
            <br/>
            <b style={{color:'white'}}>팀 등록일 2019-10-18</b><br/><br/>
            <table style={{width:'350px', color:'white',height:'100px'}}>
                        <tbody>
                            <b>팀 전적</b>
                            <tr style={{border:'1px solid white'}}>
                                <td align="center" style={{width:'60px', border:'1px solid white'}}>
                                    <b>총</b>
                                </td >
                                <td align="center" style={{width:'60px', border:'1px solid white'}}>
                                    <b>승</b>
                                </td >
                                <td align="center" style={{width:'60px', border:'1px solid white'}}>
                                    <b>패</b>
                                </td>
                                <td align="center" style={{width:'60px', border:'1px solid white'}}>
                                    <b>무</b>
                                </td>
                                <td align="center" style={{width:'70px', border:'1px solid white'}}>
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
        </div>
        </Scrollbars>
    </div>
)

export default TeamHome