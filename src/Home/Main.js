import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import ReactPlayer from 'react-player/youtube';

class Main extends Component{

    render(){
        return(
            <div>
                <Header/>
                <ReactPlayer url='https://youtu.be/ep16_YDfNUU'/>
                <Footer/>
            </div>
        )
    }
}

export default Main