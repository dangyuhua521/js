import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
let data={
    title:'新闻',
    list:[1,2,3,4,5,'下雨天']
}
let h=<div>
    <h2 custome={data.title}>{data.title}</h2>
    <ul>
        {
            data.list.map(item=>{
                return <li key={item}>{item}</li>
            })
        }
    </ul>
</div>


ReactDOM.render(h,
     document.getElementById('root'));
registerServiceWorker();
