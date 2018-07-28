import React,{Component} from 'react';

//事件改变this指向
/* 
    1. 写在结构中 this.clickhandle.bind(this)
        每次当状态改变，调用render之后，都要执行一次 不推荐
    2. 写在constructor中 this.clickhandle2 = this.clickhandle2.bind(this);
        在类初始化一次就已经改变了this执行，只执行了一次
    3. 写成箭头函数
        clickhandle3 = () => {}
*/
/**
 * props是不可变的对象 Immutable
 * 父级传给子级的数据，在子级中不能改变
 */
class Button extends Component{
    /**子类中使用了 constructor 必须调用 super 传入props */
    constructor(props){
        
        super(props)
        //组件内部的数据(状态)
        //this.props.color是取值的，把外面传给这个组件的数据作为本组件的状态的初始值
        this.state={
            color:this.props.color //定义了一个初始的数据（状态）
        }
        //改变了类中clickhandle2的this ,赋给clickhandle2
        //点击执行clickhandle2,实际上也执行了类上的clickhandle2，类上的clickhandle2的this
        this.clickhandle2= this.clickhandle2.bind(this);
    }
    clickhandle(){
        console.log('点我了')
        console.log(this)
    }
    clickhandle2(){
        console.log('点击了');
        console.log(this)

        //改变自己的状态
        //这样写只是改变了对象的对象值，并不会触发视图更新
        //this.state.color='red';
        //改变状态并调用render函数更新界面
        this.setState({
            color:'red'
        })
    }
   clickhandle3=()=>{
       console.log(this)
   } 
   render(){
       console.log('我重新渲染了')
       let s={color:this.state.color}
       return(
           <div>
               <p style={s}>改变颜色</p>
               {/**事件需小驼峰命名 onClick onMouseOver */}
               <button onClick={this.clickhandle.bind(this)}>{this.props.value}</button>
               <button onClick={this.clickhandle2}>{this.props.value}</button>
               <button onClick={this.clickhandle3}>{this.props.value}</button>
           </div>
       )
   }
}
Button.defaultProts ={
    value:'我是定制的'
}
export default Button;