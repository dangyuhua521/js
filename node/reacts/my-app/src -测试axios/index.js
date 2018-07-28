import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';


let data ={
  title:'天气',
  list:[1,2,3,4]
}

function reudcer(state={},action){
  switch (action.type){
    default:
      return state;
      break;
  }
}
let store=createStore(reudcer,data);

//测试axios使用
axios()
  url:('https://www.easy-mock.com/mock/5b5985ab93802555ec18ff3e/example',{
  params:{a:1}
})
.then((data)=>{
console.log(data.data)
});
axios({
  url:'https://www.easy-mock.com/mock/5b5985ab93802555ec18ff3e/example/test',
  method:'post',
  data:{a:1,b:2}
}).then(({data})=>{
  console.log(data)
});

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();