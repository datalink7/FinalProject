import React,{Component} from 'react';
import Empty from '../image/img.png'
import {NavLink,Route } from "react-router-dom";

const Team=()=>(
    <div>
        <div style={{width:'300px',height:'683px',border:'1px solid rgba(0,0,0,.1)'}}>
            <table  style={{width:'300px',border:'1px solid red'}}>
                <tbody>
                    <tr>
                        <td align="center">
                            <img src={Empty} alt="" style={{width:'180px'}}/>    
                        </td>        
                    </tr>
                    <tr>
                        <td align="center">
                            <b style={{fontSize:'16pt'}}>토트넘 홋스퍼 FC</b>   
                        </td>        
                    </tr>
                </tbody>
            </table>
            <br/>
            <div align="center">
            <table style={{width:'250px'}}>
                <tbody>
                    <b>팀 전적</b>
                    <tr style={{border:'1px solid gray'}}>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)',width:'60px'}}>
                            <b>승</b>
                        </td >
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)',width:'60px'}}>
                            <b>패</b>
                        </td>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)',width:'60px'}}>
                            <b>무</b>
                        </td>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)',width:'70px'}}>
                            <b>승률</b>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)'}}>
                            <b>5</b>
                        </td>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)'}}>
                            <b>1</b>
                        </td>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)'}}>
                            <b>1</b>
                        </td>
                        <td align="center" style={{border:'1px solid rgba(0,0,0,.1)'}}>
                            <b>83%</b>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <NavLink to="/Team/TeamHome" style={{ textDecoration: 'none' }}>
                <button>팀 페이지 바로가기</button>
            </NavLink>
            </div>
        </div>
        <div align="center"
        style={{position:'absolute',left:'300px', top:'200px',width:'1250px',height:'683px',border:'3px solid red'}}>
            <table className="" style={{height:'800px',border:'1px solid rgba(0,0,0,.1)'}}>
                <thead textAlign='center' verticalAlign='middle'>
                    <tr align="center">
                        <td style={{height:'100px',border:'1px solid rgba(0,0,0,.1)'}} rowSpan="2" width="300px">팀 명</td>
                        <td colSpan="4" style={{width:'400px',border:'1px solid rgba(0,0,0,.1)'}}>전 적</td>
                        <td rowSpan="2" style={{width:'200px',border:'1px solid rgba(0,0,0,.1)'}}>연 고</td>
                        <td rowSpan="2" style={{width:'200px',border:'1px solid rgba(0,0,0,.1)'}}>연령대</td>
                        <td rowSpan="2" style={{width:'150px',border:'1px solid rgba(0,0,0,.1)'}}>가입신청</td>
                    </tr>
                    <tr align="center">
                        <td style={{width:'100px',border:'1px solid rgba(0,0,0,.1)'}}>경기</td>
                        <td style={{width:'100px',border:'1px solid rgba(0,0,0,.1)'}}>승</td>
                        <td style={{width:'100px',border:'1px solid rgba(0,0,0,.1)'}}>무</td>
                        <td style={{width:'100px',border:'1px solid rgba(0,0,0,.1)'}}>패</td>
                    </tr>
                </thead>
            </table>
            <br/><br/>
            <React.Fragment>
                        <nav aria-label="Page navigation" style={{position:'absolute', left:'450px'}}>
                             <ul className="pagination">
                                <li title="이전 페이지보기" className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>◀</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>1</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>2</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>4</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>5</a></li>
                                <li title="이후 페이지 보기" className="page-item">
                                    <a className="page-link" href="#" style={{color:'black'}}>▶</a></li>
                            </ul>
                         </nav>
            </React.Fragment>
        </div>
    </div>
)

export default Team