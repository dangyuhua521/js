import React from 'react';
class News extends React.Component{
    render(){
        //this.props 是一个对象 接收传给这个组件的数据
        console.log(this.props.a)
        return(
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News;