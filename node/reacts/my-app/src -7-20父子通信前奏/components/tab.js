import React,{Component } from 'react';
// import '../style/style.css';

class Tab extends Component{
   constructor(props){
       super(props);
       //cunstructor 在初始的执行一次,把props的color作为初始状态
       //在之后父级的状态改变了，不会影响子级
       this.state={
           color:this.props.color
       };        
   }
   childrenChangColor=()=>{
       this.setState({
           color:'green'
       })
   }
    render(){
        let{color}=this.props;
        console.log('子级渲染...')
        return (
            <div>
                <p style={{color:color}}>改变颜色</p>
                <button onClick={this.childrenChangColor}>按钮</button>
            </div>
        )
    }
}

export default Tab;