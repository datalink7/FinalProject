import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './check-icon.png';
import css from './JoinFinal.css';

class JoinFinal extends Component{

    render(){
        return(
            <div className="JoinFinal">
                <img className="img" src={img}></img>
                <h1> 회원가입이 <b>완료</b> 되었습니다.</h1>
                <span>'{this.props.name}'님의 회원가입을 축하드립니다.</span><br/>
                <span>알차고 실속있는 서비스로 찾아뵙겠습니다.</span>
                <hr/>
                <button type="button" class="btn btn-dark">로그인</button>
                <button type="button" class="btn btn-dark">홈으로</button>
            </div>
        )
    }
}

export default JoinFinal