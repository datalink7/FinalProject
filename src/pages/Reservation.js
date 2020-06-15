import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import { Scrollbars } from 'react-custom-scrollbars';
import '../Css/MainStyle.css'
import Carousel from 'nuka-carousel';
import {ruda1} from '../image/dobongruda1.jpg'
import {ruda2} from '../image/dobong_ruda2.jpg'
import {ruda3} from '../image/dobong_ruda3.jpg'
import {ruda4} from '../image/unnamed.png'

const Reservation=()=>(
  <div>
    <Scrollbars className="ReScroll" style={{width:'100%', height:'683px', border:'2px solid red'}}>
    <Carousel
      className="Carousel"
      width="100%"
      autoplay="true"
      autoplayInterval="2000"
      wrapAround="true"
      // framePadding="50px 0 200px 0"
      cellAlign="center"
      // slideWidth="600px"
      style={{height:'600px',border:'2px'}}>
        <img src="https://plab-football.s3.amazonaws.com/media/dobong_coner.jpg" alt="First Slide" style={{border:'2px'}}/>
        <img src="https://plab-football.s3.amazonaws.com/media/doboal_goal.jpg" alt=""/>
        <img src="https://plab-football.s3.amazonaws.com/media/player_fJKkASh.jpg" alt=""/>
    </Carousel>
    <div style={{width:'1342px', height:'683px', border:'2px solid red', position:'relative', left:'280px', marginTop:'-30px'}}>
      <br/>
      <b className="txt1">도봉 루다 풋살장</b><br/>
      <b className="txt2">서울 도봉구 방학동 271-2 </b>
      <b className="txt3">// 지도보기</b><br/><br/>
      <b className="txt4">참가비</b><br/>
      <b className="txt5">10,000원</b>
      <hr/>
      <b className="txt6">진행방식</b><br/>
      <hr/>
      <table className="ReButton" style={{border:'2px solid red'}}>
        <tbody>
          <tr>
          <td width="700px" valign="top" style={{paddingTop:'10px',fontSize:'11pt',height:'100px'}}>
            <b className="txt7" style={{fontSize:'15pt', marginLeft:'10px'}}>예약시간</b><br/>
            <b className="txt8" style={{fontSize:'10pt', marginLeft:'10px'}}>예약 시간을 선택해주세요.</b><br/>
            <button >6~8</button>
            <button >8~10</button>
            <button >10~12</button>
            <button>12~14</button>
            <button >14~16</button>
            <button >16~18</button>
            <button>20~22</button>
            <button>22~24</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              5 vs 5 일반매치 경기
            </td>
          </tr>
          <tr>
            <td>
              Home
            </td>
            <td>
              Away
            </td>
          </tr>
          <tr>
            <td>
              Home
            </td>
            <td>
              Away
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </Scrollbars>
  </div>
)

export default Reservation;