import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom';

//  import Root from './Root';


import TWrite from './pages/Content';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TWrite/>
    {/* <Root/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();