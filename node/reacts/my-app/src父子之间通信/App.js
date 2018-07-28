import React from 'react';
import Tab from './components/tab';
import News from './components/news';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
           color:'yellow'
        }
    }
  changColor=()=>{
      this.setState({
          color:'red'
      })
  }
  //传给子级的，以后会在子级中执行
  parentFn=(e)=>{
    console.log('子级执行这个在父级中定义的函数')
    console.log(this)
    this.setState({
        color:e
    })
  }
    render(){
        let {color}=this.state;
        console.log('重新渲染...')
        //当父级中的状态发生变化，使用父级中状态的子组件也会更新
        return (
            <div>
               <p style={{color:color}}>改变父组件中的颜色</p>
                <button onClick={this.changColor}>改变颜色</button>
                <hr/>
                <h3>一下是嵌套的子组件</h3>
                <Tab color={color} parentFn={this.parentFn}/>
            </div>
        )
    }
}
export default App;