import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { add,jian } from '../actions/action'
 class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>我是测试组件</h2>
        <button onClick={() => {
          this.props.jian();
        }}>-----</button>
        <span>{this.props.num}</span>
        <button onClick={() => {
          // 需要改变redux中n
          this.props.changeN('固定值1000');
        }}>++++++</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    num: state.n,
    
  }
}
function miaov(fn,dispatch) {
  return function (value) {
    dispatch(fn(value))
  }
}
function mapDispatchTopProps(dispath){
  return {
    // 把action提出了，作为公共部分，提供的是一个函数
    // 需要把action'函数和dispath结合起来
    changeN: miaov(add, dispath),
    // 这里对象的函数将来作为组件的props传入
    // 在组件中会执行这个函数，在函数中或去派发action改变redux中的数据

    jian(){
      dispath({type:'jian'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Test);