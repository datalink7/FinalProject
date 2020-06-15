import React from 'react';
import Slider from 'react-animated-slider';
import CarouselSlider from "react-carousel-slider"
import 'react-animated-slider/build/horizontal.css';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import logo2 from '../image/logo2.png';

import Match from '../Match/Match';

const slides = [
    { title: 'First item', description: 'Lorem ipsum1'},
    { title: 'Second item', description: 'Lorem ipsum2'},
    { title: 'Third item', description: 'Lorem ipsum3'}
  ];

const Header = () => (
        <div>
            <div className="slider">
                <Slider autoplay={1500}>
                    {slides.map((slide, index) => <div key={index}>
                        <h2>{slide.title}</h2>
                        <div>{slide.description}</div>
                    </div>)}
                </Slider>
            </div>
            <img src={logo2} className="logo2" alt="" />
            <div>
            <ul className="Menu1">
                <li>
                    <a href="/Match">Match</a>
                </li>
                <li>
                    <a href="/League">League</a>
                </li>
                <li>
                    <a href="/Team">Team</a>
                </li>
                <li>
                    <a href="/Proxy">Proxy</a>
                </li>
                <li>
                    <a href="/Q&A">Q & A</a>
                </li>
            </ul>
            </div>
            <div className="Menu2">
                <ul>
                    <li>
                        <a href="/MyPage">MyPage</a>
                    </li>
                    <li>
                        <a href="/Login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
)

export default Header;