import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
          val:'123',
          checked:false
        };
    }
    updateVal=(e)=>{
        //e 这个函数被当成了事件处理函数，第一参数就是事件对象
        //事件对象不是原生的事件对象，是经过react包装的
        console.log(e.target.value)
        if(e.target.value==="456") return;
        this.setState({
            val: e.target.value
        })
    }
    changeChecked=(e)=>{
        this.setState({
            checked: e.target.checked
        })
    }
    render(){
        //当父级中的状态发生变化，使用父级中状态的子组件也会更新
        return (
            <div>
               <input/>
               {/**这个元素是非受控的，有初始值写成defaultValue */}
               <input defaultValue="123"/>
               <input type="checkbox" defaultChecked/>
               {/** 这个元素是受控的，有初始值，写成value */} 
               {/** 这个元素是受控的，更新视图，必须调用setState更新*/}
               <input value={this.state.val} onChange={this.updateVal}/>
               <input 
                type="checkbox"
                checked={this.state.checked}
                onChange={this.changeChecked}
               /> 
            </div>
        )
    }
}
export default App;