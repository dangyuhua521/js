import React from 'react';
import Tab from './components/tab';
let one =[
    {
        title:'蜜蜂',
        list:['蜜蜂1','蜜蜂1','蜜蜂1']
    },{
        title:'房间',
        list:['房间1','房间1','房间1']
    },{
        title:'翅膀',
        list:['翅膀1','翅膀1','翅膀1']
    }
]
let two =[
    {
        title:'蜜蜂2',
        list:['蜜蜂','蜜蜂','蜜蜂']
    },{
        title:'房间2',
        list:['房间','房间','房间']
    },{
        title:'翅膀2',
        list:['翅膀','翅膀','翅膀']
    }
]
class App extends React.Component{
    render(){
        return (
            <div>
              <Tab data={one}/>
              <Tab data={two}/>
            </div>
        )
    }
}
export default App;