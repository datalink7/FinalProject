import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Write.css';
import qimage from './qimage.png';

class Write extends Component{

    render(){
        return(
            <div className="write">
                <form>
               {/* <form onSubmit={this.handlesubmit.bind(this)}> */}
                   <h2>문의<img src={qimage}/></h2>
                   <div className="explain">
                       <ul>
                           <li>문의하시기 전 FAQ를 확인하시면 궁금증을 더욱 빠르게 해결하실 수 있습니다.</li>
                            <li>문의글 답변 운영시간 09:00 ~ 21:00</li>
                       </ul>
                   </div>
                   
                    <table className="table table-bordered" style={{textAlign:'center;'}}>
                    
                        <tr>
                            <td class="Type">문의유형</td>
                            <td>
                                <select>
                                <option value="공지사항">공지사항</option>
                                <option value="구장관련문의">구장관련문의</option>
                                <option value="예약관련문의">예약관련문의</option>
                                <option value="포인트관련문의">포인트관련문의</option>
                                <option value="매니저관련문의">매니저관련문의</option>
                                </select>
                            </td>
                            <td className="Writer">글쓴이</td>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <td className="Subject">제목</td>
                            <td><input type="text" ></input></td>
                        </tr> 
                        <tr>
                            <td className="Content" style={{width:'70px;'}}>내용</td>
                            <td>
                                <textarea className="text" placeholder="※불편사항이나 문의 사항을 남겨주시면 신속하게 답변드리겠습니다.">
                                </textarea>
                            </td>
                        </tr>   
                         
                    </table>

                </form>
            </div>
        )
    }
}

export default Write;
