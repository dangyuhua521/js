import React,{Component } from 'react';
// import '../style/style.css';

class Tab extends Component{
    childrenChangColor=()=>{
        //通知父级改变
        this.props.parentFn('green');
    }
    render(){
        let{color}=this.props;
        console.log('子级渲染...')
        return (
            <div>
                <p style={{color:color}}></p>
                <button onClick={this.childrenChangColor}></button>
            </div>
        )
    }
}

export default Tab;