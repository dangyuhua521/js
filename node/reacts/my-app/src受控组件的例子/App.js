import React from 'react';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
           val:''
        }
    }
    changColor=()=>{
        this.setState({
            color:'red'
        })
    }

    render(){
        console.log('重新渲染...')
        //当父级中的状态发生变化，使用父级中状态的子组件也会更新
        return (
            <div>
               <input value={this.state.val} onChange={this.updateVal}/>
                <p>{this.state.val}</p>
                <div>hello</div>
            </div>
        )
    }
}
export default App;