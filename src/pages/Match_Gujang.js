import React from 'react';
import Banner from '../MainComponents/Banner'
import ReactWeeklyDayPicker from 'react-weekly-day-picker'
import '../Css/Calender.css'
import '../Css/MainStyle.css'
import { BrowserRouter, Route } from "react-router-dom";

const Gujang=()=>(
    <div style={{border:'10px solid red', height:'800px'}}>
            <ReactWeeklyDayPicker
                className="picker"
                startDay={new Date()} // First day as Date Object or 22 June 2016
                selectedDays={['10 June 2020', new Date()]} // Selected days list
                multipleDaySelect={false} //enables multiple day selection
            />
        <div className="GujangList" style={{border:'2px solid red', position:"relative", top:'150px'}}>
            <table>
                <tbody>
                    <tr align="center">
                        <td style={{width:'60px'}}>지역 선택</td>
                        <td>
                            <select className="form-control" style={{width:'150px'}}>
                                <option>서울</option>
                                <option>인천,경기</option>
                                <option>강원</option>
                                <option>경남</option>
                            </select>
                        </td>
                        <td style={{width:'100px'}}>지역/구장 검색</td>
                        <td>
                            <input type="text" className="form-control" style={{width:'200px'}}></input>    
                        </td>
                        <td style={{width:'130px'}}>
                            <button type="button" 
                            style={{backgroundColor:'#503396', width:'100px', border:'1px solid #503396',borderRadius:'10px', color:'white', outline:'none'}}>검색하기</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table className="MatchList" style={{border:'2px solid blue'}}>
                <tbody>
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                    <tr style={{border:'2px solid blue'}}>
                        <td width="150px" style={{border:"1px solid gray",height:'150px'}}>
                            <img src="" alt="" style={{height:'150px'}}/>
                        </td>
                        <td width="450px">
                            <h5>도봉 라온 풋살장 A</h5>
                            <h6>날짜 출력</h6>
                            <button >6~8</button>
                            <button >8~10</button>
                            <button >10~12</button>
                            <button>12~14</button>
                            <button >14~16</button>
                            <button >16~18</button>
                            <button>20~22</button>
                            <button>22~24</button><br/><br/>
                            <button style={{width:'150px',marginLeft:'5px', backgroundColor:'black'}}>예약하기</button>
                        </td>
                    </tr>    
                                    
                </tbody>
            </table>
        </div>
    </div>
)


export default Gujang;
