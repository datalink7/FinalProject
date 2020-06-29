import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/MainStyle.css'
import img from '../image/check-icon.png';

const TCSuccess=()=>(
    <div align="center">
        <div style={{marginTop:'100px'}}>
            <img src={img} alt="" style={{width:'250px'}}/><br/>
            <b style={{fontSize:'35pt'}}>팀 생성이 완료 되었습니다.</b><br/>
            <span style={{fontSize:'20pt'}}>팀 페이지에서 바로 확인가능합니다.</span><br/>
            <NavLink to="/Team/TeamHome" style={{ textDecoration: 'none',fontSize:'15pt' }}>
                <button style={{marginTop:'30px',width:'300px', height:'40px',backgroundColor:'black',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>팀페이지 바로가기</button>
            </NavLink> 
        </div>
    </div>
)

export default TCSuccess