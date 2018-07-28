import React, { Component } from 'react'
import comment from './common'
class Miaov2 extends Component {
  render() {
    return (
      <div>
        <h2>这是miaov2组件，{this.props.title}</h2>
      </div>
    )
  }
}
export default comment(Miaov2)