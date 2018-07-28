import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
  ()=>{
    console.log('渲染完成')
  }
);

registerServiceWorker();