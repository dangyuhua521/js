import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { add, jian } from '../actions/action'
 class Test extends Component {
  render() {
    return (
      <div>
        <h2>我是加减组件</h2>
        <button onClick={() => {
          this.props.jian();
        }}>-----</button>
        <span>{this.props.k}</span>
        <button>++++++</button>
      </div>
    )
  }
}

function miaov(state){
  return {
    k: state.n
  }
}

function ketang(dispatch) {
  return {
    jian: bindActionCreators(jian, dispatch)
  }
}

export default connect(miaov, ketang)(Test)
