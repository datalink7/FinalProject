import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';

import MainVideo from '../image/mainVideo.mp4';

import '../Css/Style.css'

class Main extends Component{

    render(){
        return(
            <div>
                <div className="video">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={MainVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>
        )
    }
}

export default Main