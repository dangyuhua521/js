import React,{Component} from 'react';
class Button extends Component{
    render(){
        return <button>{this.props.value}</button>
    }
}
Button.defaultProts={
    value:'我是定制的'
}
export default Button;