import React from 'react';
import './style/App.css';


import Message from './components/message';
import List from './components/list';

let listData=[];
//状态提升
/*
兄弟组件之间通信，把需要变化的状态提到这两个组件的父级上

跨多级组件通信，找到两个组件最近共有的祖先组件

*/
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        };
    }
    
    updateListData=(data)=>{
        console.log('触发了',this.state.listData)
        this.state.listData.push(data)
        console.log(this.state.listData)
        this.setState({
            listData:this.state.listData
        })
    }

    render(){
       
        return (
            <div className="wrapper">
            <Message updateListData={this.updateListData}/>
            <List listData={listData}/>
            </div>
        );
    }
}
export default App;