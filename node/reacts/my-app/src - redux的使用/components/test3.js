import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>我是测试组件</h2>
        <button>-----</button>
        <span>{this.props.num}</span>
        <button>++++++</button>
      </div>
    )
  }
}


/**
 * 
 * connect函数是把redux和组件链接起来的
 * connect(函数1)(组件)
 *  
 * 函数1
 *  接收redux中数据
 *  函数1返回一个对象，这个对象上的属性都会传给组件的props
 * 
 */
function mapStateToProps(state) {
  // 这个对象是传给组件的props的
  return {
    num: state.n
  }
}
// 会从redux中取出需要的值，传给需要的组件，返回一个组件
export default connect(mapStateToProps)(Test);