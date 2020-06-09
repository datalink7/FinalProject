import React from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../image/logo.png';

const Header = () => (
        
        <div>
            <img src={logo} className="logo" />
            <div>
            <ul className="Menu1">
                <li>
                    <a href="#none">Match</a>
                </li>
                <li>
                    <a href="#none">League</a>
                </li>
                <li>
                    <a href="#none">Team</a>
                </li>
                <li>
                    <a href="#none">Proxy</a>
                </li>
                <li>
                    <a href="#none">Q & A</a>
                </li>
            </ul>
            </div>
            <div className="Menu2">
                <ul>
                    <li>
                        <a href="#none">MyPage</a>
                    </li>
                    <li>
                        <a href="#none">Login</a>
                    </li>
                </ul>
            </div>
        </div>
)

export default Header;