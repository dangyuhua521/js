import React,{ Component } from 'react';
import './style/base.css';
import './style/index.css';


import TodoHeader from './components/todo-header';
import TodoList from './components/todo-list';
import TodoFooter from './components/todo-footer';

let listData=JSON.parse(localStorage.getItem('dang724')) || [];
 // 数据三种状态：all active  completed
 
let listData=[
    {
        id:123,
        title:'leo',
        checked:true
    },
    {
        id:5676,
        title:'今天很热',
        checked:true
    }
];

class App extends Component{
    constructor(props){
        super(props);
        this.state={
         listData:listData
        };
    }
    
    //改变所有的数据的checked
    toggleAllParent =(bl)=>{
        this.state.listData.forEach(item=>item.checked=bl);
        this.setState({
            listData:this.state.listData
        })
    }

    //添加数据
    addTodoParent=(title)=>{
        console.log('执行了')
        this.state.listData.push({
           id:Date.now(),
           title,
           checked:false  
        })
        this.setState({
            listData:this.state.listData
        })
    }
    //根据id改变某个数据的checked
    toggleOneById=(id)=>{
        let item =this.state.listData.find(item=>item.id===id);
        if(item){
            item.checked=!item.checked;
            this.setState({
                listData:this.state.listData
            })
        }
    }
    //根据id删除
    deleteOneByIdParent=(id)=>{
        let filterList=this.listData.filter(item=>item.id !==id)
        this.setState({
            listData:filterList
        })
    }

    //根据id，改变id对应的title
    updateTitleById=(id,title)=>{
        let item =this.state.listData.find(item=>item.id===id);
        if(title===''){//删除
            this.deleteOneByIdParent(id)
            return;

        }
        if(item){
            item.title=title;
            this.setState({
                listData:this.state.listData
            })

        }
    }
    render(){
       
        let listHtml ='',footerHtml ='',unCheckedLen=0;
        let {listData}=this.state;

        //没有数据的话，中间和底部就不渲染页面
        if(listData.length !==0){
            unCheckedLen=listData.filter(item=>!item.checked).length;
            listHtml=<TodoList
                listData={listData}
                toggleAllParent={this.toggleAllParent}
                toggleOneById={this.toggleOneById}
                deleteOneByIdParent={this.deleteOneByIdParent}
                updateTitleById={this.updateTitleById}
            />
            footerHtml=<TodoFooter unCheckedLen={unCheckedLen}/>
        }
        return (
            <section className="todoapp">
            <TodoHeader addTodoParent={this.addTodoParent}/>
            {listHtml}
            {footerHtml}
            </section>
        )
    }
}
export default App;