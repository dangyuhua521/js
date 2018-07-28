import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
let data={
    title:'新闻',
    list:[1,2,3,4]
}
let newArr = arr.map((item)=>{
    return <span key={item}>{item}</span>
})
   console.log(newArr)
   let h =<h2>
       <span>{data}</span>
       <span>{1+1}</span>
       <span>{[1,2,3].map((item)=>{return item *2})}</span>
       {newArr}
   </h2>
console.log(<div>hello</div>)

ReactDOM.render(
    h,
    document.getElementById('root'),
    ()=>{
        console.log('渲染完成')
    });
registerServiceWorker();
