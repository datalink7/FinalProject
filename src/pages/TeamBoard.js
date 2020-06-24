import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/MainStyle.css'
import eye from '../image/eyes.png';
import pen from '../image/pen1.png';
import icon from '../image/search-icon2.png';
import '../Css/TList.css'

class TeamBoard extends Component{

    render(){
        return(
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
                <div style={{position:'absolute',left:'500px',width:'1250px',height:'683px',border:'3px solid red'}}>
                    <form className="form_T">
                    <NavLink exact to="/Team/TeamHome/TeamBoard/TWrite" style={{ textDecoration: 'none',color:'white'}}>
                        <button type="button" className="wbtn_T" ><img src={pen} className="pen"/></button>
                    </NavLink>
                        <table class="table table-bordered" width="1000px">
                        <thead class="head_T">
                                <tr>
                                    <th className="no_T">
                                        No
                                    </th>
                                    <th className="type_T">
                                        Type
                                    </th>
                                    <th className="title_T">
                                        TiTle
                                    </th>
                                    <th className="member_T">
                                        Member
                                    </th>
                                    <th className="date_T">
                                        Date
                                    </th>
                                    <th>
                                        <img src={eye} className="eye" alt=""/>
                                    </th>
                                </tr>    
                            </thead>
                            <tbody className="tbody_T">
                                <tr className="body_T">
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        멤버공개
                                    </td>
                                    <td>
                                        횐님들 방가르(*^ω^*)
                                    </td>
                                    <td>
                                        팀장
                                    </td>
                                    <td>
                                        2020-06-19
                                    </td>
                                    <td>
                                        4
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        전체공개
                                    </td>
                                    <td>
                                        횐님들이랑 경기후 뒷풀이서~_^
                                    </td>
                                    <td>
                                        팀장
                                    </td>
                                    <td>
                                        2020-06-19
                                    </td>
                                    <td>
                                        100
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        전체공개
                                    </td>
                                    <td>
                                        배산임수한 곳에서 팀원분들과 죤츄억~
                                    </td>
                                    <td>
                                        황금발
                                    </td>
                                    <td>
                                        2020-06-19
                                    </td>
                                    <td>
                                        80
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                        <div clasName="paging">
                        <React.Fragment>
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li title="이전 페이지보기" className="page-item">
                                        <a className="page-link" href="#">◀</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">4</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">5</a></li>
                                    <li title="이후 페이지 보기" className="page-item">
                                        <a className="page-link" href="#">▶</a></li>
                                </ul>
                            </nav>
                        </React.Fragment>
                        </div>
                    </form>
                
                    <div className="boardT_search">
                        <select className="select_T">
                            <option>제목+내용</option>
                            <option>제목만</option>
                            <option>작성자</option>
                        </select>
                        <input type="text" ></input>
                        <button classname="btnsearch" class="search"><img  className="icon" src={icon} alt=""/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamBoard

// const TeamBoard=()=>(
//     <div>
//         <div style={{position:'absolute',width:'230px',height:'683px',backgroundColor:'#503396',border:'3px'}}>
//             <table style={{width:'300px',height:'550px',fontSize:'20pt',border:'2px',marginTop:'62px',marginLeft:'20px'}} className="TemaMenu">
//                 <tbody>
//                     <tr>
//                         <td align="center" width="200px">
//                             <NavLink exact to="/Team/TeamHome" 
//                             style={{ textDecoration: 'none',color:'white'}}>
//                                 <button type="button" name="Hover" className="button-container-2"
//                                 style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>Team Main</button>
//                             </NavLink>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="center">
//                             <NavLink exact to="/Team/TeamHome/TeamMember" style={{ textDecoration: 'none',color:'white'}}>
//                             <button type="button" 
//                                 style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>TeamMember</button>
//                             </NavLink>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="center">
//                             <NavLink exact to="/Team/TeamHome/MatchHistory" style={{ textDecoration: 'none',color:'white'}}>
//                             <button type="button" 
//                                 style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>MatchHistory</button>
//                             </NavLink>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td align="center">
//                             <NavLink exact to="/Team/TeamHome/TeamBoard" style={{ textDecoration: 'none',color:'white'}}>
//                             <button type="button" 
//                                 style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray'}}>TeamBoard</button>
//                             </NavLink>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
// )

// export default TeamBoard