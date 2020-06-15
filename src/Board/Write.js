import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Write.css';
import qnaim from './qnaim.png';

class Write extends Component{

    render(){
        return(
            <div className="write">
                <form>
               {/* <form onSubmit={this.handlesubmit.bind(this)}> */}
                  <b className="question">문의<img className="qnaimg" src={qnaim}/><br/></b>
                  <br/>
                   <div className="explain">
                       <ul>
                           <li>문의하시기 전 <b>공지사항</b>을 확인하시면 궁금증을 더욱 빠르게 해결하실 수 있습니다.</li>
                            <li>문의글 답변 운영시간 09:00 ~ 21:00</li>
                       </ul>
                   </div>
                   
                    <table className="table table-bordered" style={{textAlign:'center;'}}>
                    
                        <tr>
                            <td class="Type"><b>문의유형</b></td>
                            <td >
                            <select className="selectop">
                                <option value="공지사항">공지사항</option>
                                <option value="구장관련문의">구장관련문의</option>
                                <option value="예약관련문의">예약관련문의</option>
                                <option value="포인트관련문의">포인트관련문의</option>
                                <option value="매니저관련문의">매니저관련문의</option>
                                </select>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="writer"><b>작성자</b></td>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <td className="Subject"><b>제목</b></td>
                            <td><input type="text" className="subjectip"></input></td>
                        </tr> 
                        <tr>
                            <td className="Content" style={{width:'80px;'}}><b>내용</b></td>
                            <td>
                                <textarea className="text" placeholder="※불편사항이나 문의 사항을 남겨주시면 신속하게 답변드리겠습니다.">
                                </textarea>
                            </td>
                        </tr>   
                       
                    </table>
                    <div className="button">
                    <button type="submit" class="btn btn-dark">저장</button>
                    <button type="button" class="btn btn-dark">뒤로가기</button>
                    </div>
                    <hr/>
                </form>
            </div>
        )
    }
}

export default Write;
