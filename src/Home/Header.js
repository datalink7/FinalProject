import React from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from '../image/logo.png';

const Header = () => (
        
        <div className="Menu">
            <img src={logo} className="logo" />
            <div>
            <ul className="Menu1">
                <li>
                    <br/>
                    <a href="#none">Match</a>
                </li>
                <li>
                    <br/>
                    <a href="#none">League</a>
                </li>
                <li>
                    <br/>
                    <a href="#none">Team</a>
                </li>
                <li>
                    <br/>
                    <a href="#none">Proxy</a>
                </li>
                <li>
                    <br/>
                    <a href="#none">Q & A</a>
                </li>
            </ul>
            </div>
        </div>
)

export default Header;