import React from "react";
import { Route } from "react-router-dom";
import { Home,Match, League, Team, QnA, Gujang, Reservation, JoinFinal, JoinForm, LoginForm, Payment, TeamHome, TeamMember, MatchHistory, TeamBoard, TWrite, Mypage, MyMatchHistory, Account, PointHistory } from "./pages"; //index.js 호출
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

      <Route exact path="/League" component={League} />

      <Route exact path="/Team" component={Team} />

      <Route exact path="/QnA" component={QnA}/>

      <Route exact path="/Match/Gujang" component={Gujang}/>

      <Route exact path="/Match/Gujang/Reservation" component={Reservation}/>

      <Route exact path="/Login" component={LoginForm}/>

      <Route exact path="/Login/JoinForm" component={JoinForm}/>

      <Route exact path="/Login/JoinForm/JoinFinal" component={JoinFinal}/>

      <Route exact path="/Match/Gujang/Reservation/Payment" component={Payment}/>

      <Route exact path="/Team/TeamHome" component={TeamHome}/>

      <Route exact path="/Team/TeamHome/TeamMember" component={TeamMember}/>

      <Route exact path="/Team/TeamHome/MatchHistory" component={MatchHistory}/>

      <Route exact path="/Team/TeamHome/TeamBoard" component={TeamBoard}/>

      <Route exact path="/Team/TeamHome/TeamBoard/TWrite" component={TWrite}/>

      <Route exact path="/Mypage" component={Mypage}/>

      <Route exact path="/Mypage/MyMatchHistory" component={MyMatchHistory}/>

      <Route exact path="/Mypage/Account" component={Account}/>

      <Route exact path="/Mypage/PointHistory" component={PointHistory}/>
      <Footer/>
    </div>
  );
};

export default Title;