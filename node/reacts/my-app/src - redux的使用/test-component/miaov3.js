import React, { Component } from 'react'
import comment from './common.js'
class Miaov3 extends Component {
  render() {
    return (
      <div>
        <h2>这是miaov3组件，{this.props.title}</h2>
      </div>
    )
  }
}
export default comment(Miaov3)