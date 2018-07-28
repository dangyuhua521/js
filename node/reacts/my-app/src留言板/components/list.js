import React,{ Component } from 'react';
import Item from './item';
class List extends Component{
    static defaultProps={
        listData:[]
    }
    render(){
        let {listData}=this.props;
        let html='';
        if(listData.length===0){
            html=<p>暂时没有内容</p>
        }else{
            html=listData.map((item)=>{
                return <Item key={item.id}{...item}/>
            })
        }
        return (
            <div>
                {
                html
                }
            </div>
        )
    }
}

export default List;