import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import LoginForm from './member/LoginForm';
import JoinForm from './member/JoinForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <LoginForm /> */}
    <JoinForm/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
