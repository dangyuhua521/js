import React,{Component } from 'react';
import '../style/style.css';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state={
            currentIndex:0
        };
    }
    //默认props
    static defaultProps={
        data:[{title:'默认标题'},{title:'默认标题'}]
    }
    clickHandle=(i)=>{
        console.log('点我了',i)
        this.setState({
            currentIndex:i

        })
    }
    alertOne=(i)=>{
        alert(i)
    }
    render(){
        let {currentIndex}=this.state;
        let buttons = this.props.data.map((item,index)=>{
            let cls = index ===currentIndex?"yellow":''
           return <button
                className={cls}
                key={index}
                onClick={()=>this.clickHandle(index)}
           >
            {item.title}
           </button>
        })
        return (
            <div>
              {buttons}
              {
                  this.props.data.map((item,index)=>{
                      let bn = currentIndex===index?'block':'none';
                    return (
                        <ul key={index} style={{display:bn}}>
                       {
                            item.list&&item.list.map((item,index)=>{
                               return <li onClick={()=>{this.alertOne(index)}} key={index}>{item}</li>
                           })
                       }
                        </ul>
                    )  
                  })
              }
            </div>
        )
    }
}
export default Tab;