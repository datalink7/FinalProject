import React,{Component} from 'react';
import typing from '../image/typing.png';
import '../Css/TWrite.css';
class TWrite extends Component{

    render(){
        return(
            <div className="TWR" align="center">
                 <img src={typing} className="typing" alt=""/>
                 <form >
                     <div className="twtable">
                     <table class="table table-bordered" >
                         <tr>
                             <td className="twnick">
                                 <b style={{fontSize:'13pt'}}>닉네임</b>
                             </td>
                             <td>
                                <select className="twsel" style={{fontSize:'13pt'}}>
                                    <option value="all">전체공개</option>
                                    <option value="member">멤버공개</option>    
                                </select> 
                             </td>
                         </tr>
                         <tr>
                             <td colSpan="2" style={{fontSize:'13pt'}}>
                                 글제목&nbsp;&nbsp;&nbsp;&nbsp;
                                 <input type="Text" className="twtitle"></input>
                             </td>
                         </tr>
                         <tr>
                             <td colSpan="2">
                                 <textarea placeholder="※멤버들에게 남기고싶은 말을 작성하세요." className="twtext"></textarea>
                             </td>
                         </tr>
                     </table>
                     </div>
                     <hr/>
                     <div class="twsavebtn">
                     <button type="submit" class="twsvbtn">저장하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
                     <button type="button" class="twsvbtn">돌아가기</button>
                     </div>
                 </form>
            </div>
        )
    }
}

export default TWrite

