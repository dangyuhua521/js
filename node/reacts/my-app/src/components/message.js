import React, { Component } from 'react'
import {Link,Switch,Route,Redirect} from 'react-router-dom';
export default class About extends Component {
    render() {
        console.log(this.props)
        let {match,location}=this.props;

        return (
            <div>
                我是Mesage页面
                <hr/>
                <ul>
                    <li>
                        <Link to={`${match.url}/pinglun`}>评论</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/jianxin`}>简信</Link>
                    </li>
                </ul>
                <h2>一下展示二级导航的内容</h2>
                <Switch>
                    <Route path={`${match.url}/pinglun`} render={()=>{
                        return <h3>我是评论页面</h3>
                    }}/>
                    <Route path={`${match.url}/jianxin`} render={()=>{
                        return <h3>我是jianxin页面</h3>
                    }}/>
                    <Redirect to={`${match.url}/pinglun`}></Redirect>
                </Switch>
            </div>
        )
    }
}
