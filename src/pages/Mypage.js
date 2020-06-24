import React,{Component} from 'react';
import '../Css/MainStyle.css'
import {NavLink} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const Mypage=()=>(
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
        <div style={{width:'1210px', height:'680px', border:'5px solid yellow',position:'absolute',left:'500px'}}>
            <table style={{marginTop:'10px'}}>
                <tbody>
                    <tr>
                        <td>
                            <span style={{fontSize:'18pt'}}>안녕하세요 김지욱님😄</span><br/>
                        </td>
                    </tr>
                    <tr>
                        <td height="80px">
                            <b 
                            style={{fontSize:'20pt',color:'#503396',textDecorationLine:'underline',textDecorationColor:'black',textUnderlinePosition:'under'}}>
                                현재 잔여 포인트 : 50,000 Point &nbsp;</b>
                            <button type="button" style={{marginLeft:'120px',backgroundColor:'#503396',borderColor:'#503396',borderRadius:'10px',width:'100px',height:'40px',color:'white',fontSize:'13pt'}}>충전하기</button>
                            <NavLink exact to="/Mypage/MyMatchHistory" style={{ textDecoration: 'none',color:'blue',fontSize:'13pt',marginLeft:'30px'}}>
                                <button type="button" style={{backgroundColor:'#503396',borderColor:'#503396',borderRadius:'10px',width:'100px',height:'40px',color:'white',fontSize:'13pt'}}>내역보기</button>
                            </NavLink>
                        </td>
                    </tr>
                    {/* <tr>
                        <td style={{border:'1px solid gray',width:'1200px',height:'300px'}}>
                            <span style={{fontSize:'15pt'}}>최근 나의 경기</span>
                            <NavLink exact to="/Mypage/MyMatchHistory" style={{ textDecoration: 'none',color:'blue',fontSize:'15pt',marginLeft:'920px'}}>
                                자세히 보기
                            </NavLink><br/>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <hr/>
        </div>
        <div style={{width:'1210px', height:'680px', border:'5px solid yellow',position:'absolute',left:'500px',top:'350px'}}>
        <b style={{fontSize:'15pt'}}>최근 나의 경기</b>
                            <NavLink exact to="/Mypage/MyMatchHistory" style={{ textDecoration: 'none',color:'blue',fontSize:'13pt',marginLeft:'30px'}}>
                                자세히 보기
                            </NavLink><br/><br/>
            <table className="MyMatch" style={{width:'1200px',fontSize:'13pt'}}>
                <thead align="center">
                    <tr style={{backgroundColor:'#503396',color:'white',height:'40px'}}>
                        <td width='150px'>경기종류</td>
                        <td width='130px'>날짜</td>
                        <td width='80px'>분류</td>
                        <td colSpan="2">결과</td>
                        <td>구장</td>
                        <td>위치</td>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>
                            Friendly    
                        </td>
                        <td>
                            2020-06-05
                        </td>
                        <td>
                            개인전
                        </td>
                        <td width='80px'>
                            5 : 3
                        </td>
                        <td width='80px'>
                            승리
                        </td>
                        <td>도봉 루다 풋살장 A</td>
                        <td>서울 도봉구 방학동 271-2</td>
                    </tr>
                    <tr>
                        <td>
                            Friendly
                        </td>
                        <td>
                            2020-06-06
                        </td>
                        <td>
                            개인전
                        </td>
                        <td>
                            2 : 3
                        </td>
                        <td >
                            패배
                        </td>
                        <td>FC플레이어 실내풋살장(도곡점) A</td>
                        <td>서울시 강남구 논현로 152 2층</td>
                    </tr>
                    <tr>
                        <td>
                            League     
                        </td>
                        <td>
                            2020-06-07
                        </td>
                        <td>
                            팀전
                        </td>
                        <td >
                            3 : 3
                        </td>
                        <td >
                            무승부
                        </td>
                        <td>노원-R 풋볼클럽 풋살장</td>
                        <td>서울시 노원구 한글비석로 326 4층</td>
                    </tr>
                    <tr>
                        <td>
                            League     
                        </td>
                        <td>
                            2020-06-08
                        </td>
                        <td>
                            팀전
                        </td>
                        <td >
                            1 : 0
                        </td>
                        <td >
                            승리
                        </td>
                        <td>천마풋살파크 C</td>
                        <td>서울시 송파구 마천동 68-21</td>
                    </tr>
                    <tr>
                        <td>
                            Friendly     
                        </td>
                        <td>
                            2020-06-09
                        </td>
                        <td>
                            팀전
                        </td>
                        <td >
                            5 : 3
                        </td>
                        <td >
                            승리
                        </td>
                        <td>도봉 루다 풋살장 A</td>
                        <td>서울 도봉구 방학동 271-2</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <hr style={{marginTop:'15px'}}/>
        </div>
        <div style={{width:'1210px', height:'680px', border:'5px solid yellow',position:'absolute',left:'500px',top:'700px'}}>
            <b style={{fontSize:'15pt'}}>최근 문의 내역</b>
            <table></table>
        </div>
    </div>
)

export default Mypage