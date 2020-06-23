import React,{Component} from 'react';
import '../Css/Update.css';
import './Drop.js';
import img from '../image/user_info.png'

class UserDelUpd extends Component{
    static defaultProps = {
        info:{
            name:'이름',
            phone:'01011111111',
            email:'aaa@aaa.com',
            addr:'경기도 하남시'
        },
    }

    state ={ 
        editing : false,
        name: '',
        phone: '',
        email:'',
        addr: ''
    }
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info. name);
            }

        handleToggleEdit = () =>{
            const {editing} = this.state;
            this.setState({ editing: ! editing});
        }

        handleChange = (e) => {
            const {name,phone,email,addr, value} =e.target;
            // const {pass, value} =e.target;
            this.setState({
                [name]:value,
                [phone]:value,
                [email]:value,
                [addr]:value
            });
        }

        
  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone,
        email:info.email,
        addr:info.addr
      });
    }

    if (prevState.editing && !this.state.editing) {
      onUpdate(info.name, {
        name: this.state.name,
        phone: this.state.phone,
        email:this.state.email,
        addr:this.state.addr
      });
    }
  }
    render(){
        const style ={
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        };

        const { editing } =this.state; 

        if (editing) { //수정
            return(
                <div style={style} className="user_upd">
                    <img src={img} className="user_png"/>
                    
                    <form>
                    <table class="table table-hover">
                    <tr>
                     <td>   
                        <b className="upd_tit">이름</b>
                        </td>
                        <td>
                        <input value={this.state.name}
                        className="user_input"
                        name="name"
                        placeholder="이름"
                        readOnly/>   
                        </td>
                     </tr>

                     <tr>    
                         <td>
                        <b className="upd_tit">전화번호</b>
                        </td>
                        <td>
                        <input value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}/>
                        </td>
                    </tr>   
                     <tr>    
                        <td>
                        <b className="upd_tit">E-mail</b>
                        </td>
                        <td>
                        <input value={this.state.email}
                        name="email"
                        placeholder="이메일"
                        onChange={this.handleChange}/>
                        </td>
                    </tr>   
                     <tr> 
                        <td>
                        <b className="upd_tit">주소</b> 
                        </td>
                        <td> 
                        <input value={this.state.addr}
                        name="addr"
                        placeholder="주소"
                        onChange={this.handleChange}/>
                        </td>
                    </tr>
                 </table>
                    <div className="btn_upd_user">
                    <button  className="userUp_btn" onClick={this.handleToggleEdit}>변경하기</button>
                    <button className="userUp_btn">뒤로가기</button>
                    </div>
                </form>
                </div>
                
            );
        }
        const {
            name,  phone, email, addr
        } = this.props.info;
        return(
            <div className="user_info">
            <form>
                <hr/>
                <table class="table table-bordered">
                <tr>
                    <td className="user_ti">
                        이름
                    </td>
                    <td>
                        {name}
                    </td>
                    
                </tr>
                {/* <tr>
                    <td>
                        아이디
                    </td>
                    <td>
                        {Id}
                    </td>
                </tr> */}
                {/* <tr>
                    <td>
                        생년월일
                    </td>
                    <td>
                        {birth}
                    </td>
                </tr> */}
                {/* <tr>
                    <td>
                        성별
                    </td>
                    <td>
                        {gender}
                    </td>
                </tr> */}
                <tr>
                    <td className="user_ti">
                        전화번호
                    </td>
                    <td>
                        {phone}
                    </td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td calssName="user_ti">
                        주소
                    </td>
                    <td>
                        {addr}
                    </td>
                </tr>
                </table>
                <button className="userUp_btn" onClick={this.handleToggleEdit}>수정</button>
                <button className="userUp_btn" onClick={Drop}>탈퇴</button>
            </form>
            </div>
        );
    }
}

export default UserDelUpd