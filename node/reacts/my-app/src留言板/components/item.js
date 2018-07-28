import React,{ Component } from 'react';

class Item extends Component{
    render(){
        let{userName,mes}=this,props;
       return(
          <div className="comment">
            <div class="comment-user">
                <span>{userName}</span>：
            </div>
            <p>{mes}</p>
            <span>删除</span>
          </div> 
       ) 
    }
}
export default Item;