import React,{Component} from 'react';
import  '../Css/Content.css';


class TContent extends Component{

    render(){
        return(
            <div className="ct">
              <h1 className="contType">TYPE</h1>
               <table className="ctTitle">
                   <tr>
                       <td>
                       <b className="b">TITLE</b>
                        </td>
                   </tr>
                   <tr>
                       <td>
                       <b className="b">WRITER</b>
                       </td>
                   </tr>
               </table>
                
              
               <form>
                  <table class="table table-bordered">
                    <tr>
                      <td className="content">CONTENT</td>
                    </tr>
                    <tr class="review">
                      <td><b>댓글</b></td>
                    </tr>
                    <tr>
                      <td className="reviewcontent">  
                        <b>닉네임</b><br/>
                        content<br></br>
                        <i className="date">2020.06.17 15:58</i> &nbsp;
                         <button type="button" class="reviewbtn">답글쓰기</button>
                         
                      </td>
                      
                    </tr>
                    
                    <tr >
                    <td>
                      <div className="review_border">
                        <p class="nick">닉네임</p>
                        <input type="text"className="reviewin" placeholder="댓글을 남겨보세요."></input>                         
                        <button type="button" className="reviewbtn2" >등록</button>
                        </div>
                      </td>
                    </tr>
                  </table>
                  <div className="btn-cont">
                  <button type="button" className="cont-btn">수정</button>
                  <button type="button" className="cont-btn">삭제</button>
                  <button type="button" className="cont-btn">목록으로</button>
                  </div>
                </form>
                </div> 
        )
        }
      }
export default TContent

