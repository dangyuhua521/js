import React,{ Component } from 'react';

class Message extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            message:''
        };
    }
    sendMessage=()=>{
        //提交一个新的数据，需要通知父级
        if(this.props.updateListData){
            if(this.state.name===''||this.state.message===''){
                alert('不能为空')
                 return;
            }
            this.props.updateListData({
                id:Date.now(),
                userName:this.state.name,
                mes:this.state.message
            })
        }
    }

    changeInput=(e)=>{
        this.setState({
            name:e.target.value.trim()
        })
    }
    changeTextArea=(e)=>{
        this.setState({
            message:e.target.value.trim()
        })
    }
    render(){
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                        <div className="comment-field-input">
                                <input
                                value ={this.state.name}
                                 name="username"
                                 onChange={this.changeInput}
                                  />
                        </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                        <div className="comment-field-input">
                                <textarea 
                                value={this.state.Message}
                                name="content"
                                onChange={this.changeTextArea}
                                ></textarea>
                        </div>
                </div>
                <div className="comment-field-button">
                        <button>发布</button>
                </div>
            </div> 
        )
    }
}
export default Message;