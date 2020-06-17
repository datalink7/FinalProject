import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../Css/List.css'
import icon from '../image/search-icon.png';
class List extends Component{

    

    render(){
        return(
            <div >
                <form>
                    <button type="button" class="btn btn-dark">문의하기</button>
                    <table className="table table-bordered" style={{textAlign:'center'}}>
                        <thead className="head" >
                            <tr> 
                                <th style={{width:'5%'}}>No.</th>
                                <th style={{width:'15%'}}>Type</th>
                                <th style={{width:'40%'}}>Subject</th>
                                <th style={{width:'20%'}}>Writer</th>
                                <th style={{width:'20%'}}>Date</th>
                                
                            </tr>
                        </thead>

                        <tbody className="body">
                            <td>1</td>
                            <td>공지사항</td>
                            <td>test</td>
                            <td>관리자</td>
                            <td>2020-05-11</td>
                            
                        </tbody>
                       
                    </table>
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
                </form>
                    <div className="board_search">
                    <select>
                        <option>제목+내용</option>
                        <option>제목만</option>
                        <option>작성자</option>
                    </select>
                    <input type="text" ></input>
                    <button classname="btnsearch" class="search"><img  className="icon" src={icon} alt=""/></button>
                    </div>
            </div>
        )
    }
}

export default List