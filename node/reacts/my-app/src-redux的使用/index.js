import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './use-redux/redux-learn';

ReactDOM.render(
   <App/>,
     document.getElementById('root'),
     () =>{
         console.log('渲染完成')
     });
registerServiceWorker();
