import React,{Component, useState} from 'react';
import Empty from '../image/img.png'
import {NavLink,Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Xicon from '../image/x-img.png'
import Gaip from '../image/gaip.png'
import '../Css/MainStyle.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height                : '380px',
      textAlign             : 'center',
      border                : '2px solid #503396'
    }
  };

 
class Team extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    // function App(){
    //     var subtitle;
    //     const [modalIsOpen,setIsOpen] = React.useState(false);
    //     function openModal() {
    //       setIsOpen(true);
    //     }
      
    //     function afterOpenModal() {
    //       // references are now sync'd and can be accessed.
    //       subtitle.style.color = '#f00';
    //     }
      
    //     function closeModal(){
    //       setIsOpen(false);
    //     }
    
    render () {
      return (
        // <div>
        //   <button onClick={this.handleOpenModal}>Trigger Modal</button>
        //   <Modal 
        //      isOpen={this.state.showModal}
        //      contentLabel="Minimal Modal Example"
        //   >
        //     <button onClick={this.handleCloseModal}>Close Modal</button>
        //   </Modal>
        // </div>
            <div>
                <div style={{width:'450px',height:'683px',border:'1px solid #503396'}}>
                    <table  style={{width:'450px',border:'1px'}}>
                        <tbody>
                            <tr>
                                <td align="center">
                                    <img src={Empty} alt="" style={{width:'180px',outline:'none',border:'none'}}/>    
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
                    <div align="center" className="TeamTable">
                    <table style={{width:'350px',height:'120px'}}>
                        <tbody>
                            <b>팀 전적</b>
                            <tr style={{border:'1px solid gray'}}>
                                <td align="center" style={{width:'60px',border:'1px solid rgba(0,0,0,.1)'}}>
                                    <b>승</b>
                                </td >
                                <td align="center" style={{width:'60px',border:'1px solid rgba(0,0,0,.1)'}}>
                                    <b>패</b>
                                </td>
                                <td align="center" style={{width:'60px',border:'1px solid rgba(0,0,0,.1)'}}>
                                    <b>무</b>
                                </td>
                                <td align="center" style={{width:'70px',border:'1px solid rgba(0,0,0,.1)'}}>
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
                            <button style={{fontSize:'13pt',height:'35px'}}>팀 페이지 바로가기</button>
                        </NavLink>
                    </div>
                </div>
                <div align="center" className="TeamTable" textAlign="center"
                style={{position:'absolute',left:'490px', top:'203px',width:'1400px',height:'683px',border:'3px'}}>
                    <br/>
                    <b style={{fontSize:'17pt',marginTop:'-30px'}}>팀 검색</b>
                    <input type="text" style={{width:'300px',height:'35px',marginLeft:'30px'}}/>
                    <button type="button" style={{height:'35px',marginLeft:'30px',width:'100px',fontSize:'13pt'}}>검색하기</button>
                    <div style={{position:'absolute',left:'50px', top:'17px',border:'3px'}}>
                    <NavLink to="/Team/CreateTeam" style={{ textDecoration: 'none'}}>
                        <button style={{fontSize:'13pt',height:'35px',width:'200px'}}>팀 생성하기</button>
                    </NavLink>
                    </div>
                    <br/><br/>
                    <table className="team1" style={{height:'500px',border:'1px solid rgba(0,0,0,.1)',fontSize:'13pt'}}>
                        <thead textAlign='center' verticalAlign='middle' style={{backgroundColor:'#503396',color:'white',fontSize:'13pt',border:'1px solid white'}}>
                            <tr align="center">
                                <td style={{height:'100px',border:'1px solid white'}} rowSpan="2" width="350px">팀 명</td>
                                <td colSpan="4" style={{width:'400px',border:'1px solid white'}}>전 적</td>
                                <td rowSpan="2" style={{width:'200px',border:'1px solid white'}}>연 고</td>
                                <td rowSpan="2" style={{width:'200px',border:'1px solid white'}}>연령대</td>
                                <td rowSpan="2" style={{width:'150px',border:'1px solid white'}}>가입신청</td>
                            </tr>
                            <tr align="center">
                                <td style={{width:'100px',border:'1px solid white'}}>경기</td>
                                <td style={{width:'100px',border:'1px solid white'}}>승</td>
                                <td style={{width:'100px',border:'1px solid white'}}>무</td>
                                <td style={{width:'100px',border:'1px solid white'}}>패</td>
                            </tr>
                        </thead>
                        <tbody align="center">
                            <tr>
                                <td width="80px">리버풀</td>
                                <td>29</td>
                                <td>27</td>
                                <td>1</td>
                                <td>1</td>
                                <td>강원</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        overlayClassName="modal1"
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>맨시티</td>
                                <td>28</td>
                                <td>18</td>
                                <td>3</td>
                                <td>7</td>
                                <td>경남</td>
                                <td>30대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>레스터 시티</td>
                                <td>29</td>
                                <td>16</td>
                                <td>5</td>
                                <td>8</td>
                                <td>전남</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>첼시</td>
                                <td>29</td>
                                <td>14</td>
                                <td>6</td>
                                <td>9</td>
                                <td>울산</td>
                                <td>40대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>맨유</td>
                                <td>29</td>
                                <td>12</td>
                                <td>9</td>
                                <td>8</td>
                                <td>제주</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>울브스</td>
                                <td>29</td>
                                <td>10</td>
                                <td>13</td>
                                <td>6</td>
                                <td>대구</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>셰필스 유나이티드</td>
                                <td>29</td>
                                <td>11</td>
                                <td>10</td>
                                <td>7</td>
                                <td>부산</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>토트넘</td>
                                <td>29</td>
                                <td>11</td>
                                <td>8</td>
                                <td>10</td>
                                <td>서울</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            <tr>
                                <td>아스널</td>
                                <td>28</td>
                                <td>9</td>
                                <td>13</td>
                                <td>6</td>
                                <td>인천</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr>
                            {/* <tr>
                                <td>번리</td>
                                <td>29</td>
                                <td>11</td>
                                <td>6</td>
                                <td>12</td>
                                <td>경기</td>
                                <td>20대</td>
                                <td>
                                    <button onClick={this.handleOpenModal}>가입신청</button>    
                                    <Modal
                                        // className="modal"
                                        isOpen={this.state.showModal}
                                        style={customStyles}
                                        contentLabel="onRequestClose Example"
                                        onRequestClose={this.handleCloseModal}
                                        shouldCloseOnOverlayClick={true}
                                        >
                                        <br/>
                                        <img src={Gaip} alt="" style={{width:'150px'}}/><br/><br/>
                                        <b style={{fontSize:'18pt',border:'2px',color:'#503396'}}>가입신청이 완료되었습니다.</b><br/><br/>
                                        <button type="button" onClick={this.handleCloseModal} 
                                        style={{width:'150px', height:'40px',backgroundColor:'#503396',border:'1px solid #503396',color:'white',outline:'none',borderRadius:'10px'}}>
                                            확인
                                        </button>
                                    </Modal>    
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                    <br/>
                        <React.Fragment>
                            <nav aria-label="Page navigation" style={{position:'absolute', left:'500px'}}>
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

  
  const props = {};
  
//   ReactDOM.render(<Team {...props} />, document.getElementById('main'))

export default Team