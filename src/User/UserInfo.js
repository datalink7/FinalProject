import React,{Component} from 'react';
import UserList from './UserList';

class UserInfo extends Component{

    
   
    state = {
        information: [
            {
                name: '김승현',
                pass: '1111',
                phone: '01011111111',
                email: 'aaa@aaaa.com',
                addr: '서울시 관악구'
            },
            {
                name: '이정훈',
                pass: '0000',
                phone: '01022222222',
                email: 'bbb@bbbb.com',
                addr: '경기도 부천시'
            },
            {
                name: '최환민',
                pass: '0000',
                phone: '01022222222',
                email: 'bbb@bbbb.com',
                addr: '서울시 용산구'
            },    
        ]
    }

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
          information: information.concat({ name: this.name++, ...data })
        })
      }

    handleRemove = (name) => {
        const { information} =this.state;
        this.setState({
            information: information.filter(info => info.name !== name)
        })
    }

    handleUpdate = (name, data) => { 
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => name === info.name
                ?{...info, ...data}
                : info
            )
        })
    }
    render(){
        const { information } =this.state;
        return(
           
            <div>
                <UserList
                data={information}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}/>
            </div>
        )
    }
}

export default UserInfo
