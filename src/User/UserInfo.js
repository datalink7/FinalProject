import React,{Component} from 'react';
import axios from 'axios';
import '../Css/Update.css';

class UserInfo extends Component{

    // //탈퇴 이벤트 
    // onRemove=()=>{
    //     const {row, onDelete} =this.props;
    //     onRemove(row.id);
    // }

    //정보 출력이벤트
    onSelect= () =>{
        const{row, onSelect} = this.props;

        onSelect(row.id);

    }

    //정보 수정 이벤트
    // onUpdate = () =>{ 
    //     const{row,onUpdateMember} = this.props;
    //     onUpdateMember(row.id);
    // }
    
    
   
    constructor(props)
    {
        super(props);
        this.state={
            memberData:[],
            id:"",
            name:"",
            birth:"",
            email:"",
            addr:"",
            phone:"",
            show:0,
           
        }
    }

    

    // handleCreate = (data) => {
    //     const { information } = this.state;
    //     this.setState({
    //       information: information.concat({ id: this.id++, ...data })
    //     })
    //   }
    
    //onchange 호출
    onChange = (e) => {
        const { id, value } = e.target;
        this.setState({
          [id]: value,
          
          [e.target.name]:e.target.value
        });
      }
    

    //멤버 정보가져오기 
    onSelectMember=()=>{
                 
        let url="http://localhost:8081/matchplay/mypage/selectmember?id=jiyoon";
        axios.get(url)
        .then((member)=>{
            console.log(member.data);
            this.setState({
                id:member.data.id,
                name:member.data.name,
                gender:member.data.gender,
                birth:member.data.birth,
                email:member.data.email,
                addr:member.data.addr,
                phone:member.data.phone,
                show:1
            });
            // this.onSelectMember();
            console.log(this.state.id);
        }).catch(err=>{
            console.log("select 오류:"+err)
        });
    }

    //탈퇴
    onDeleteMember= () =>{
        let url="http://localhost:8081/matchplay/mypage/delete?id="+this.state.id;
        console.log(this.state.id);
        axios.delete(url)
        .then(res=>{
            this.onSelectMember(); 
        }).catch(err=>{
            console.log("탈퇴오류:" +err);
        })
    }

    //수정
    onUpdateMember = (x) =>{
        x.preventDefault();
        var url="http://localhost:8081/matchplay/mypage/updmem";
        console.log(this.state.id);
        console.log(this.state.name);

        axios.post(url,{id:this.state.id,name:this.state.name,birth:this.state.birth,
                        email:this.state.email,addr:this.state.addr,phone:this.state.phone})
        .then((memberData)=>{
           //var arr=this.state.memberData;
           //arr.push({id:x.id.value,name:x.name.value,birth:x.birth.value,
        //email:x.email.value, addr:x.addr.value,phone:x.phone.value})
        }).catch(err=>{
            console.log("수정오류:" +err)
        });
    }

    componentDidMount(){
        this.onSelectMember();
    }

  
    render(){
        return(
            <div className="user_upd">
               <form onSubmit={this.onUpdateMember.bind(this)}>
                   <table class="table table-hover">
                       <tr>
                           <td>Id</td>
                           <td>{this.state.id}</td>
                       </tr>
                       <tr>
                           <td>Name</td>
                           <td>{this.state.name}</td>
                       </tr>
                       <tr>
                           <td>Gender</td>
                           <td>{this.state.gender}</td>
                       </tr>
                       <tr>
                           
                           <td>Birth</td>
                           <td><input type="text" name="birth" value={this.state.birth} onChange={this.onChange.bind(this)}/></td>
                       </tr>
                       <tr>
                           <td>Address</td>
                           <td><input type="text" name="addr" value={this.state.addr} onChange={this.onChange.bind(this)}/></td>
                       </tr>
                       <tr>
                           <td>Phone</td>
                           <td><input type="text" name="phone" value={this.state.phone} onChange={this.onChange.bind(this)}/></td>
                       </tr>
                       <tr>
                           <td>email</td>
                           <td><input type="text" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/></td>
                       </tr>
                   </table>
                   <div className="btn_upd_user">
                   <button type="submit" className="userUp_btn">수정</button>
                   <button onClick={this.onDeleteMember.bind(this)} className="userUp_btn">탈퇴</button>
                   </div>
               </form>
            </div>
        )
    }
}

export default UserInfo