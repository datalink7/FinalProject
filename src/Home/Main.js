import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import ReactPlayer from 'react-player/youtube';

import '../Css/Style.css'

class Main extends Component{

    render(){
        return(
            <div>
                <Header/>
                    <ReactPlayer url='https://youtu.be/ep16_YDfNUU' playing control/>
                <Footer/>
            </div>
        )
    }
}

export default Main