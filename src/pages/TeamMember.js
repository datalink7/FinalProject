import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/MainStyle.css';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '30%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height                : '380px',
      textAlign             : 'center',
      border                : '2px solid #503396'
    }
  };

//   const customStyles1 = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//       height                : '380px',
//       textAlign             : 'center',
//       border                : '2px solid #503396'
//     }
//   };

class TeamMember extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        showModal1:false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleOpenModal1 = this.handleOpenModal1.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleCloseModal1 = this.handleCloseModal1.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleOpenModal1 () {
        this.setState({ showModal1: true });
      }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    handleCloseModal1 () {
        this.setState({ showModal1: false });
      }

    render () {
        return (
    <div className="TeamMember">
        <div style={{position:'absolute',width:'230px',height:'683px',backgroundColor:'#503396',border:'3px'}}>
            <table style={{width:'300px',height:'550px',fontSize:'20pt',border:'2px',marginTop:'62px',marginLeft:'20px'}} className="TemaMenu">
                <tbody>
                    <tr>
                        <td align="center" width="200px">
                            <NavLink exact to="/Team/TeamHome" 
                            style={{ textDecoration: 'none',color:'white'}}>
                                <button type="button"
                                style={{width:'250px', height:'80px',backgroundColor:'black', border:'2px solid white',borderRadius:'20px',boxShadow:'3px 3px 3px 0px gray',outline:'none'}}>Team Main</button>
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
        <div className="TeamMember" align="center" style={{position:'absolute',left:'520px', top:'200px',border:'3px',marginTop:'10px'}}>
            <br/><br/>
            <table style={{border:'none',fontSize:'13pt'}} className="TeamMember">
                <tbody align="center">
                    <tr>
                        <td width="150px">
                            <b style={{fontSize:'13pt'}}>팀원 검색</b>
                        </td>
                        <td width="150px">
                            <select style={{width:'100px'}}>
                                <option>등급</option>
                                <option>아이디</option>
                                <option>성별</option>
                                <option>지역</option>
                                <option>가입일</option>
                            </select>
                        </td>
                        <td width="350px">
                            <input type="text" style={{width:'300px'}}/>
                        </td>
                        <td width="150px">
                            <button type="button" style={{width:'100px',backgroundColor:'#503396',color:'white'}}>검색하기</button>
                        </td>
                        <td style={{width:'150px'}}>
                            <button onClick={this.handleOpenModal1} style={{backgroundColor:'black',color:'white',width:'126.08px'}}>가입승인</button>    
                                <Modal
                                    // className="modal"
                                    isOpen={this.state.showModal1}
                                    style={customStyles}
                                    contentLabel="onRequestClose Example"
                                    onRequestClose={this.handleCloseModal1}
                                    shouldCloseOnOverlayClick={true}
                                    >
                                    <table className="GaipList" width="395px">
                                        <thead align="center" style={{color:'white',backgroundColor:'black'}}>
                                            <tr height="50px">
                                                <td>아이디</td>
                                                <td>나이</td>
                                                <td>연고</td>
                                                <td>승인요청</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr height="45px">
                                                <td>손흥민동생</td>
                                                <td>23</td>
                                                <td>서울</td>
                                                <td>
                                                    <button type="button" style={{width:'85px', height:'30px',backgroundColor:'#503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>승인</button>
                                                </td>
                                            </tr>
                                            <tr height="45px">
                                                <td>이승우친형</td>
                                                <td>29</td>
                                                <td>경기</td>
                                                <td>
                                                    <button type="button" style={{width:'85px', height:'30px',backgroundColor:'#503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>승인</button>
                                                </td>
                                            </tr>
                                            <tr height="45px">
                                                <td>박지성친구</td>
                                                <td>35</td>
                                                <td>인천</td>
                                                <td>
                                                    <button type="button" style={{width:'85px', height:'30px',backgroundColor:'#503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>승인</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br/><br/>
                                    <button type="button" onClick={this.handleCloseModal1} 
                                    style={{width:'100px', height:'40px',backgroundColor:'black',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>
                                        닫기
                                    </button>
                                </Modal>    
                        </td>
                        <td style={{width:'150px'}}>
                            <button onClick={this.handleOpenModal} style={{backgroundColor:'black',color:'white'}}>팀원 초대하기</button>    
                                <Modal
                                    // className="modal"
                                    isOpen={this.state.showModal}
                                    style={customStyles}
                                    contentLabel="onRequestClose Example"
                                    onRequestClose={this.handleCloseModal}
                                    shouldCloseOnOverlayClick={true}
                                    >
                                    <br/>
                                    <b style={{fontSize:'20pt',color:'#503396'}}>팀원 초대하기</b><br/><br/>
                                    <hr></hr><br/><br/>
                                    <b style={{fontSize:'13pt'}}>아이디를 입력해주세요.</b><br/><br/>
                                    <input type="text" style={{width:'200px',height:'30px'}}/>
                                    <br/><br/><br/>
                                    <button type="button" onClick={this.handleCloseModal} 
                                    style={{width:'100px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>
                                        초대하기
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button" onClick={this.handleCloseModal} 
                                    style={{width:'100px', height:'40px',backgroundColor:'black',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px',fontSize:'13pt'}}>
                                        닫기
                                    </button>
                                </Modal>    
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/><br/>
            <table style={{fontSize:'13pt'}} className="MemberList">
                <thead align="center" style={{color:'white',backgroundColor:'#503396'}}>
                    <tr style={{height:'50px',}}>
                        <td width="60px">
                            번호
                        </td>
                        <td width="100px">
                            등급
                        </td>
                        <td width="250px">
                            아이디
                        </td>
                        <td width="80px">
                            성별
                        </td>
                        <td width="250px">
                            지역
                        </td>
                        <td width="100px">
                            경기참여수
                        </td>
                        <td width="150px">
                            가입일
                        </td>
                        <td width="150px">
                            등급수정/강퇴
                        </td>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td height="40px">1</td>
                        <td>팀장</td>
                        <td>미스타손</td>
                        <td>남</td>
                        <td>서울 강남구</td>
                        <td>27</td>
                        <td>2020-06-10</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">2</td>
                        <td>부팀장</td>
                        <td>맛스타</td>
                        <td>남</td>
                        <td>서울 동작구</td>
                        <td>26</td>
                        <td>2020-06-10</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">3</td>
                        <td>부팀장</td>
                        <td>버터플라이</td>
                        <td>여</td>
                        <td>서울 관악구</td>
                        <td>22</td>
                        <td>2020-06-15</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">4</td>
                        <td>부팀장</td>
                        <td>불꽃슛</td>
                        <td>남</td>
                        <td>서울 강남구</td>
                        <td>30</td>
                        <td>2020-06-20</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">5</td>
                        <td>팀원</td>
                        <td>오렌지</td>
                        <td>남</td>
                        <td>경기 의정부</td>
                        <td>26</td>
                        <td>2020-06-30</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">6</td>
                        <td>팀원</td>
                        <td>후리얍</td>
                        <td>여</td>
                        <td>서울 강서구</td>
                        <td>27</td>
                        <td>2020-06-30</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">7</td>
                        <td>팀원</td>
                        <td>삼성맨</td>
                        <td>남</td>
                        <td>서울 송파구</td>
                        <td>24</td>
                        <td>2020-06-15</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">8</td>
                        <td>팀원</td>
                        <td>뮹뮹</td>
                        <td>여</td>
                        <td>경기 하남</td>
                        <td>29</td>
                        <td>2020-06-26</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">9</td>
                        <td>팀원</td>
                        <td>빡빡이</td>
                        <td>남</td>
                        <td>서울 동대문구</td>
                        <td>33</td>
                        <td>2020-07-01</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td height="40px">10</td>
                        <td>팀원</td>
                        <td>육군훈련소</td>
                        <td>남</td>
                        <td>서울 금천구</td>
                        <td>35</td>
                        <td>2020-06-13</td>
                        <td>
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-wrench"></span>
                            </button>
                            &nbsp;/&nbsp; 
                            <button type="button" style={{backgroundColor:'white',borderColor:'white',outline:'none'}}>
                                <span className="glyphicon glyphicon-scissors"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <React.Fragment>
                <nav aria-label="Page navigation" style={{position:'absolute', left:'900px',top:'770px'}}>
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

export default TeamMember