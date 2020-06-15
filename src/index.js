import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import List from './Board/List.js';
import Write from './Board/Write.js';
//  import LoginForm from './member/LoginForm';
//  import JoinForm from './member/JoinForm';
//  import JoinFinal from './member/JoinFinal';
  // import Find from './member/Find';
  // import Root from './member/Root';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Write/>
    {/* <List/> */}
    {/* <Root/> */}
      {/* <LoginForm/>    */}
       {/* <JoinForm/>  
      <JoinFinal/>   */}
      {/* <Find/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
