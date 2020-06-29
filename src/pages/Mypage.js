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
                            <NavLink exact to="/Mypage/ReservationHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Reservation</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Mypage/MyMatchHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Match</button>
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <NavLink exact to="/Mypage/PointHistory" style={{ textDecoration: 'none',color:'white'}}>
                            <button type="button" 
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Point</button>
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{width:'1200px', height:'125px', border:'5px',position:'absolute',left:'500px',backgroundColor:'#503396',marginTop:'15px'}}>
            <table style={{marginTop:'15px',marginLeft:'20px'}}>
                <tbody>
                    <tr>
                        <td>
                            <span style={{fontSize:'18pt',color:'white'}}>안녕하세요 김지윤님😄</span><br/>
                        </td>
                    </tr>
                    <tr>
                        <td height="60px">
                            <b 
                            style={{fontSize:'20pt',color:'white',textDecorationLine:'underline',textDecorationColor:'yellow',textUnderlinePosition:'under'}}>
                                현재 잔여 포인트 : 50,000 Point &nbsp;</b>
                            <NavLink exact to="/Mypage/PointCharge" style={{textDecoration:'none'}}>
                                <button type="button" style={{marginLeft:'500px',backgroundColor:'black',border:'0.1px solid white',borderRadius:'10px',width:'100px',height:'40px',color:'white',fontSize:'13pt'}}>충전하기</button>
                            </NavLink>
                            <NavLink exact to="/Mypage/PointHistory" style={{ textDecoration: 'none',color:'blue',fontSize:'13pt',marginLeft:'30px'}}>
                                <button type="button" style={{backgroundColor:'black',border:'0.1px solid white',borderRadius:'10px',width:'100px',height:'40px',color:'white',fontSize:'13pt'}}>내역보기</button>
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
            {/* <hr/> */}
        </div>
        <div style={{width:'1200px', height:'200px', border:'5px',position:'absolute',left:'500px',top:'355px'}}>
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
                    {/* <tr>
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
                    </tr> */}
                </tbody>
            </table>
            <br/>
            {/* <hr style={{marginTop:'5px'}}/> */}
        </div>
        <div style={{width:'1210px', height:'200px', border:'5px',position:'absolute',left:'500px',top:'620px'}}>
            <b style={{fontSize:'15pt'}}>최근 문의 내역</b>
            <NavLink exact to="/QnA" style={{ textDecoration: 'none',color:'blue',fontSize:'13pt',marginLeft:'30px'}}>
                자세히 보기
            </NavLink><br/><br/>
            <table className="MyMatch" style={{width:'1200px',fontSize:'13pt'}}>
                <thead align="center">
                    <tr style={{backgroundColor:'#503396',color:'white',height:'40px'}}>
                        <td width='130px'>문의유형</td>
                        <td width='130px'>작성일</td>
                        <td width='350px'>제목</td>
                        <td width='130px'>답변유무</td>
                        <td width='130px'>답변날짜</td>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>예약문의</td>
                        <td>20-06-10</td>
                        <td>예약이 실패했는데 확인 부탁드려요~</td>
                        <td>문의확인</td>
                        <td>문의확인</td>
                    </tr>
                    <tr>
                        <td>매니저문의</td>
                        <td>20-06-09</td>
                        <td>1명이 부족한데 매니저님 포함해서 신청가능한가요?</td>
                        <td>답변완료</td>
                        <td>20-06-10</td>
                    </tr>
                    <tr>
                        <td>매칭문의</td>
                        <td>20-06-08</td>
                        <td>팀전은 개인은 신청 못하나요?</td>
                        <td>답변완료</td>
                        <td>20-06-09</td>
                    </tr>
                    <tr>
                        <td>팀생성문의</td>
                        <td>20-06-08</td>
                        <td>팀 로고는 제작 요청이 가능한가요?</td>
                        <td>답변완료</td>
                        <td>20-06-08</td>
                    </tr>
                    {/* <tr>
                        <td>예약문의</td>
                        <td>20-06-05</td>
                        <td>예약 취소 좀요</td>
                        <td>답변완료</td>
                        <td>20-06-05</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    </div>
)

export default Mypage