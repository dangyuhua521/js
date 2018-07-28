import React, { Component } from 'react'


export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/?a=#234">首页</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname:'/about',
                            search:'?sort=name',
                            hash:'#the-hash'
                        }}>
                        about</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
