import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Css/MainStyle.css';

const Menu=()=>{

    return(
        <div className="Menu5">
            <div className="Menu1">
                <ul>
                    <li>
                        <NavLink exact to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Match" style={{ textDecoration: 'none' }}>Match</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/League" style={{ textDecoration: 'none' }}>League</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Team" style={{ textDecoration: 'none' }}>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Proxy" style={{ textDecoration: 'none' }}>Proxy</NavLink>
                    </li>
                </ul>
            </div>
            <div className="Menu2">
                <ul>
                    <li>
                        <NavLink exact to="/MyPage" style={{ textDecoration: 'none' }}>MyPage</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Login" style={{ textDecoration: 'none' }}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;