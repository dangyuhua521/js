import React from 'react';
//import Tab from './components/tab';

class App extends React.Component{
    constructor(props){
        super(props)
       this.state=({
           val:''
       })
    } 
    updateVal=(e)=>{
        this.setState({
            val:e.target.value
        })
    }

    render(){
        console.log('重新渲染...')
        return (
            <div>
                <input value={this.state.val} onChange={this.updateVal} />
                <p>{this.state.val}</p>
                <div>hello</div>
            
            </div>
        )
    }
}
export default App;