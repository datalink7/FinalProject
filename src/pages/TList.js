import React,{Component} from 'react';
import eye from '../image/eyes.png';
import '../Css/TList.css'

class TList extends Component{

    render(){
        return(
            <div>
                <form className="form_T">
                    <table className="table_T">
                        <thead className="head_T">
                            <tr>
                                <th className="no_T">
                                    No
                                </th>
                                <th className="type_T">
                                    Type
                                </th>
                                <th className="title_T">
                                    TiTle
                                </th>
                                <th className="member_T">
                                    Member
                                </th>
                                <th className="date_T">
                                    Date
                                </th>
                                <th>
                                    <img src={eye} className="eye"/>
                                </th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    멤버공개
                                </td>
                                <td>
                                    횐님들 방가르
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </form>
            </div>
        )
    }
}

export default TList

