import React,{ Component} from 'react';

class TodoHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };
    }


    addTodoHandle=(e)=>{

        if(e.keyCode===13){
            if(this.props.addTodoParent&&this.state.value){
                this.props.addTodoParent(this.state.value);
                this.setState({
                    value:''
                })
            }
        }
    }
    render(){
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                className="new-todo" 
                placeholder="请输入内容" 
                value={this.state.value}
                onChange={
                    (e)=>{
                        this.setState({ value:e.target.value})
                    }
                }
                onKeyDown={this.addTodoHandle}
                />
            </header>
        )
    }
}
export default TodoHeader;