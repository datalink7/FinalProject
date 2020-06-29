import React,{Component} from 'react';
import '../Css/MainStyle.css'
import {NavLink} from 'react-router-dom';
import axios from "axios";
import { Scrollbars } from 'react-custom-scrollbars';

class PointHistory extends React.Component{
    constructor(){
        this.state={
            id:'admin',
            getDatas:[]            
        }
    }

    componentWillMount()
    {
      console.log("componentWillMount");
      this.getDatas();
    }

    getDatas=()=>{
        console.log("GetDatas 호출");
        var url="http://localhost:9000/matchplay/PointHistory/All";
        axios.get(url)
        .then((responseData)=>{
            this.setState({
                getDatas:responseData.data            
            })
        }).catch(err=>{
            console.log(err)
        });
}
  

    render(){
        return(
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
        <div style={{position:'absolute',left:'500px',top:'250px',width:'1200px',height:'50px',border:'1px solid gray'}} align="center">
            <table style={{fontSize:'13pt'}} align="center">
                <tbody align="center">
                    <tr>
                        <td width="100px">날짜조회</td>
                        <td>
                            <input type="Date"/> ~ <input type="Date"/>
                        </td>
                        <td width="150px" >
                            <input type="radio" name="type" defaultChecked="true" value="전체" style={{marginLeft:'30px'}}/>전체내역
                        </td>
                        <td width="150px">
                            <input type="radio" name="type" value="충전" style={{marginLeft:'20px'}}/>충전내역
                        </td>
                        <td width="150px">
                            <input type="radio" name="type" value="사용" />사용내역
                        </td>
                        <td width="160px" style={{borderLeft:'1px solid rgba(0,0,0,.1)'}}>
                            정렬방식
                        </td>
                        <td width="100px">
                            <select>
                                <option>최신순</option>
                                <option>오래된순</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style={{position:'absolute',left:'500px',top:'300px',width:'1200px',height:'580px',border:'1px solid gray'}} align="center">
            <table className="point_tb">
                <thead align="center">
                    <tr>
                        <td width="250px">
                            날짜
                        </td>
                        <td width="150px">
                            분류
                        </td>
                        <td width="300px">
                            금액 내역
                        </td>
                    </tr>
                </thead>
            </table>
            <React.Fragment>
                            <nav aria-label="Page navigation" style={{}}>
                                    <ul className="pagination" style={{fontSize:'13pt'}}>
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
    }
}

export default PointHistory