import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Header2 from './Header2';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Match from '../Match/Match';

import MainVideo from '../image/mainVideo.mp4';

import '../Css/MainStyle.css'

class Home extends Component{

    render(){
        return(
            <div className="Main">
                <Header2/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Home