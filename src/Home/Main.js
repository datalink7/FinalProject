import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import ReactPlayer from 'react-player/youtube';

import '../Css/Style.css'

class Main extends Component{

    render(){
        return(
            <div className='Main'>
                <div className='Header'>
                    <Header/>
                </div>
                    <ReactPlayer className='react-player' url='https://youtu.be/U8jVpEz9xwk' playing muted
                        width='100%'
                        height='600px'/>
                        {/* <iframe type="text/html" width="640" height="360"
                            src="https://youtu.be/U8jVpEz9xwk?autoplay=1"
                            frameborder="0"></iframe> */}
                <Footer/>
            </div>
        )
    }
}

export default Main