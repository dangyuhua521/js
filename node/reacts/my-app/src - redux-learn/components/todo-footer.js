import React,{ Component } from 'react';
import classNames from 'classnames'

class TodoFooter extends Component{
    render(){
        let { filterHash }=this.props;
        console.log(classNames({abc: 1===1,dang: 2===2}))
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.unCheckedLen}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li><a href="#/all" className={classNames({
                        selected:filterHash==='all'
                    })}>All</a></li> 
                    <li><a href="#/active" className={classNames({
                        selected:filterHash==='active'
                    })}>Active</a></li> 
                    <li><a href="#/completed" className={classNames({
                        selected:filterHash==='completed'
                    })}>Completed</a></li>
                </ul>
            </footer>
        )
    } 
}
export default TodoFooter;