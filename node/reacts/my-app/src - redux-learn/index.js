import React from 'react';
import ReactDOM from 'react-dom';
import './redux-learn/redux-learn';

import registerServiceWorker from './registerServiceWorker';
//import App from './App';


//类名将来使用完成标签的名字<news/><news></news>
//组件的标签名要大写
ReactDOM.render(
   <div></div>,
     document.getElementById('root'),
     () =>{
         console.log('渲染完成')
     });
registerServiceWorker();
