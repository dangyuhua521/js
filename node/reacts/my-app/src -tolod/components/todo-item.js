import React, { Component } from 'react'

 class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.title
      };
      this.input=React.createRef();
    }
    toggle=()=>{
        if(this.props.toggleOneById){
            this.props.toggleOneById(this.props.id)
        }
    }
    //双击编辑
    doubleClickHandle=()=>{
        //存一下编辑之前的value值
        if(this.props.updateEditedId){
           this.props.updateEditedId(this.props.id)
            // 在实例上存一个编辑之前的数据
            //this.beforeValue = this.state.value;
        }
    }

    //在输入框输入对的时候更新value值
    updateValue =(e)=>{
        //异步更新
        this.setState({
            value:e.target.value
        })
        console.log(this.state.value)
    }
    updateTitleEmitParent(){
        //通知父级结束编辑状态
        if(this.props.updateEditedId){
            this.props.updateTitleEmitParent('');
        }    
        if(this.props.updateTitleEmitParent){
            this.props.updateTitleEmitParent(
                this.props.id,
                this.state.value //最新值

            )
        }      
    }
    editDone=(e)=>{
        console.log('触发了blur',e.keyCode)
        if(e.keyCode===13||e.keyCode===undefined){
            this.updateTitleEmitParent()
        }else if(e.keyCode===27){
            this.updateTitleEmitParent()
            // 把取消编辑后，当前组件的value状态改变成编辑之前的，放在再这个组件中
            // 去state的值是最新的。
            this.setState({
                value:this.props.title
            })
        }
    }

    componentDidUpdate(){
        this.input.current.focus();
    }
    
    render(){
        let {title,checked,id,editId}=this.props;
        let cls =checked?'completed' :'';
       // 编辑的id和我自己的id相同
        let cls2 = editId === id ? 'editing' : ''
        return (
            <li className={cls+' ' +cls2}>
                <div className="view">
                    <input 
                    className="toggle"
                    type="checkbox"
                    checked={checked}
                    onChange={this.toggle}
                      />
                    <label
                    onDoubleClick={this.doubleClickHandle}
                    onMouseDown={(e)=>e.preventDefault()}
                    >{title}
                    </label>
                    <button 
                    className="destroy"
                    onClick={this.props.deleteOneByIdParent.bind(this,id)}

                    ></button>
                </div>
                <input 
                className="edit"
                value={this.state.value}
                onChange={this.updateValue}
                onBlur={this.editDone}
                onKeyDown={this.editDone} 
                />
            </li>
        )
    }
}
export default TodoList;