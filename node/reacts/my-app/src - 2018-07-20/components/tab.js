import React from 'react';
import Button from './button';
class Tab extends React.Component{
    render(){
        let {data}=this.props;
        return(
            <div>
                <h3>选项卡</h3>
                {
                    data.map((item,index)=>{
                        return <Button key={index}value={item.title}/>
                    })

                }
                {
                    data.map((item,index)=>{
                        return (
                            <div key={index}>
                                {
                                    item.list.map((item,index)=>{
                                      return <p key={index}>{item}</p>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Tab;