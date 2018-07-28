import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    <li>12</li>
                    <li>23</li>
                    <li>23</li>
                    <li>23</li>
                    <li>2321</li>
                </ul>
                <button onClick={()=>{
                    this.props.delect && this.props.delect()
                }}>删除</button>
            </div>
        )
    }
}
