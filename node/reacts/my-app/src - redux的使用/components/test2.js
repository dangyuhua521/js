import React, { Component } from 'react'
import {connect} from 'react-redux'

// 以下代码只是示例，解释connct中取值redux的值，一个应用只能有一个store
import { createStore } from 'redux'
import reducer from '../reducers/reducer'
let data = {
  n: 1,
  title: '1233',
  arr: [1, 2, 3]
}

let store = createStore(reducer, data);

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

 function connect2(mapState){

  let state = store.getState()
  
  return function (Component){
    
    class Con extends React.Component {
      render(){
        return <Component {...mapState(state)}/>
      }
    }

    return Con;
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
  return {
    num: state.n
  }
}
export default connect2(mapStateToProps)(Test);