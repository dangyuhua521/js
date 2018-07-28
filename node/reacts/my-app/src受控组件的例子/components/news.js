import React from 'react';

class News extends React.Component{
   childrenChangeColor=()=>{
       //通知父级改变
       this.props.parentFn('pink')
   }
    
    render(){
       let {color}=this.props;
       console.log('子级渲染。。。')
        return(
            <div>
               <p style={{color:color}}></p>
               <button onClick={this.childrenChangeColor}>按钮</button>
            </div>
        )
    }
}
//给props设置默认值
export default News;
