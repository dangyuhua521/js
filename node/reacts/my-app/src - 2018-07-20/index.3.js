import React from 'react';
import ReactDOM from 'react-dom';


import registerServiceWorker from './registerServiceWorker';
import App from './App';

//类名将来使用完成标签的名字<news/><news></news>
//组件的标签名要大写
ReactDOM.render(<App/>,
     document.getElementById('root'),()=>{
         console.log('渲染完成')
     });
registerServiceWorker();
