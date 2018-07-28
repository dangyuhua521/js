import React from 'react';
import Tab from './components/tab';

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

    render(){
        let {color}=this.state;
        console.log('父级渲染...')
        //当父级中的状态发生变化，使用父级中状态的子组件也会更新
        return (
            <div>
                <p style={{color:color}}>改变父组件中的颜色</p>
                <button onClick={this.changColor}>改变颜色</button>
                <hr/>
                <h3>以下是嵌套的子组件</h3>
                <Tab color={color}/>
            </div>
        )
    }
}
export default App;