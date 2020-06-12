import React from "react";
import { Route } from "react-router-dom";
import { Home,Match, League, Team, Proxy, Gujang } from "./pages"; //index.js 호출
import Root from "./Root";
import './Css/MainStyle.css';
import Menu from "./MainComponents/Menu";
import Footer from "./MainComponents/Footer";
import Banner from './MainComponents/Banner'
import logo2 from './image/logo2.png';

const Title = () => {
  return (
    <div>
      <Banner/>
      <Menu />
      <img src={logo2} className="logo2" alt="" />
      <Route exact path="/" component={Home} />
      {/* exact : 다른 페이지랑 겹쳐나오지 않도록 해준다. */}
      <Route exact path="/Match" component={Match} />
      {/* <Route path="/about" component={About} /> */}

      {/* 파라미터로 읽기-반듯이 넣어야함
      <Route path="/about/:name" component={About} /> */}

      {/*선택적 파라미터로 읽기*/}
      <Route exact path="/League" component={League} />

      {/*선택적 파라미터로 읽기*/}
      <Route exact path="/Team" component={Team} />

      <Route path="/Proxy" component={Proxy}/>

      <Route path="/Match/Gujang" component={Gujang}/>
      <Footer/>
    </div>
  );
};

export default Title;