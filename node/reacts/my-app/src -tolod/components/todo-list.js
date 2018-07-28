import React,{ Component }  from 'react';

import TodoItem from './todo-item';

class TodoList extends Component{
    constructor(props){
      super(props);
      this.state={
          editId:'' //存需要编辑的id
      };  
    }
    static defaultProps={
        listData:[]
    }

    //改变需要编辑对的id
    updateEditedId=(id)=>{
        this.setState({
            editId:id
        })
    }

    toggleAllHandle=(e)=>{
        //通知父级改变
        if(this.props.toggleAllParent){
            this.props.toggleAllParent(e.target.checked);
        }
    }
    render(){
        let { listData,
            toggleOneById,
            deleteOneByIdParent,
            updateTitleById
        } = this.props;
        //是否全选
        let checkedAll=listData.every(item=>item.checked)
        return (
            <section className="main">
                <input
                 className="toggle-all"
                  type="checkbox" 
                  checked={checkedAll}
                  onChange={this.toggleAllHandle}
                  />
                <ul className="todo-list">
                   {
                       listData.map((item)=>{
                           return <TodoItem
                                    key={item.id} {...item}
                                    toggleOneById={toggleOneById}
                                    deleteOneByIdParent={deleteOneByIdParent}
                                    updateEditedId ={this.updateEditedId}
                                    updateTitleById={updateTitleById}
                                   />
                       })
                   } 
                </ul>
            </section>
        )
    }
}
export default TodoList;