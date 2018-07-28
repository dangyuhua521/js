import React,{Component } from 'react';
// import '../style/style.css';

class Tab extends Component{

   childrenChangColor=()=>{
      this.props.parentFn('green')
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