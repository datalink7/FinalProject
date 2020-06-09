import React,{Component} from 'react';
import css from './JoinForm.css';
class joinForm extends Component{

    render(){
        return(
            <div>
                <h3 className="Title">회원가입</h3>
                 <form>
                     <table className='Join'>
                        
                        <strong>·아이디</strong><br/>
                         <input type="text" className="Id" placeholder="아이디 입력"/><br/>

                        <strong>·비밀번호</strong><br/>
                         <input type="password" className="Password" placeholder="특수문자를 포함한 8 ~ 15 입력"/><br/>

                        <strong>·비밀번호 확인</strong><br/>
                         <input type="password" className="Passwordck" placeholder="비밀번호 확인"/><br/>

                        <strong>·이메일주소</strong><br/>
                         <input type="text" className="E-mail" placeholder="ex)"/><br/>

                        <strong>·이름</strong><br/>
                         <input type="text" className="Name" placeholder="이름을 입력하세요"/><br/>

                        <strong>·생년월일</strong><br/>
                         <input type="text" className="Birth" placeholder="ex)1992년10월30일->19921030"></input><br/>

                        <strong>·성별</strong><br/>
                        <div className="gender">
                          <label>
                            <input type="radio" value="option1" checked={true} name="gender"/>
                              여자
                             </label>
                            <label>
                            <input type="radio" value="option2" name="gender" />
                             남자
                         </label>  
                         </div>                 

                        <strong>·휴대폰번호</strong><br/>
                            <input type="text" className="Ph" placeholder="-없이 입력->ex)01000000000"></input><br/>

                        <strong>·주소</strong><br/>
                            <input type="text" className="Addr"/><br/>
                        <button type="submit">회원가입</button>
                        <button type="button">뒤로가기</button>
                    </table>
                </form>
            </div>
        )


    }
}

export default joinForm;