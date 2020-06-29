import React,{Component} from 'react';
import '../Css/UpdPass.css';
import zxcvbn from 'zxcvbn';
import passimg from '../image/psicon.png';
import './UpdPassApp.js';


class UpdPass extends Component{

    //password 일치확인
    state = {
        password:'',
        confirmpassword:''
    }

    state={
        passwordScore:''
    }
    
    handleOnPasswordInput(passwordInput) {
        const { score } = zxcvbn(passwordInput);
        this.setState({ passwordScore: score });
        this.setState({ password: passwordInput });
      }
      
 
    handleOnConfirmPasswordInput(confirmPasswordInput) {
      this.setState({ confirmPassword: confirmPasswordInput });
      }

    //새패스워드 일치여부확인
    doesPasswordMatch() {
        const { password, confirmPassword } = this.state;
        return password === confirmPassword;
      }

    //쿨래스명 반환 
    confirmPasswordClassName() {
        const { confirmPassword } = this.state;
      
        if (confirmPassword) {
          return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
        }
      }

      
    //   handleOnPasswordInput = boolean =>{
    //     switch (boolean) {
    //         case true:
    //             return 'is-valid';
    //         case false:
    //             return 'is-invalid';
    //         default:
    //             return '';    
    //     }
    // };



      //일치하지 않을때 메세지
      renderFeedbackMessage() {
        const { confirmPassword } = this.state;
      
        if (confirmPassword) {
          if (!this.doesPasswordMatch()) {
            return (
              <div className="invalid-feedback">패스워드가 일치하지 않습니다</div>
            );
          }
        }
      }

      //안전성 확인
      renderFeedbackMessage2() {
        const { passwordScore  } = this.state;
        let message, className;
      
        switch (passwordScore ) {
          case 0:
            message = '위험!!!;';
            className = 'text-danger';
            break;
          case 1:
            message = '위험!!!';
            className = 'text-danger';
            break;
          case 2:
            message = '보통';
            className = 'text-warning';
            break;
          case 3:
            message = '안전';
            className = 'text-success';
            break;
          case 4:
            message = '매우 안전';
            className = 'text-primary';
            break;
          default:
            message = '비밀번호를 입력해주세요';
            break;
        }
      
        return (
          <b id="passwordHelp" className={`form-text mt-2 ${className}`}>
            {`${message}`}
          </b>
        );
      }


    render(){
        return(
            <div className="newPass">
                <img src={passimg} className="psimg" alt=""/>
                <div className="new_ps1">
                <label htmlFor="passwordInput" className="pwd_tx">새 비밀번호</label><br/>
                <input type="password" 
               className="form-control"
                id="passwordInput"
                onChange={e => this.handleOnPasswordInput(e.target.value)}/>
                {this.renderFeedbackMessage2()}
             </div>
            <div className="new_ps2">
                <label htmlFor="confirmPasswordInput" className="pwd_tx">새 비밀번호 확인</label><br/>
                <input type="password" 
               className={`form-control ${this.confirmPasswordClassName()}`}
                id="confirmpassword"
                onChange={e => this.handleOnConfirmPasswordInput(e.target.value)}/>
                {this.renderFeedbackMessage()}    
                </div>         
                <button type="submit" className="btn_nps">확인</button>
            </div>
        );
    }
}

export default UpdPass
