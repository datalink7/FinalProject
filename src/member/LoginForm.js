import React from 'react';
import './LoginForm.css';
import join from './JoinForm.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const ModalLogin = () => {
        return(
            <React.Fragment>
            <div className="Login-Modal">
                <h3 className="Head">로그인</h3>
                <form>
                   
                          <input type="text" className="Id"  
                            placeholder="아이디"></input>
                
                            <input type="password" className="Password" 
                            placeholder="비밀번호"></input>  

                            <input type="checkbox" className="SaveId"/>
                            <label htmlFor="SaveID">아이디 저장</label>

                    <button class="btn btn-primary ">Login</button>
                    <a href='#' className='a'>ID/PW찾기 </a><b className='b'>|</b>
                    <a href='#' className='a'> 회원가입 </a>
                </form>
            </div>
            </React.Fragment>
        )
    }


export default ModalLogin