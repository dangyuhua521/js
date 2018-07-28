import React from 'react';

class News extends React.Component{
    //给这个类加上静态属性
    static defaultProps={
        list:['a']
    }
    render(){
        //this.props 是一个对象 接收传给这个组件的数据
        console.log(this.props)
        console.log(this);//内部在使用组件的时候，会把这个组件给实例化了，this执行这个类的实例化对象
        let {title,list}=this.props;
        return(
            <div>
                <h2>{title}</h2>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
//给props设置默认值
export default News;
