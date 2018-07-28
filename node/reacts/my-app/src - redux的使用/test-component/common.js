import React, { Component } from 'react'

// 封装一个函数，用来包装组件
function common(Compoennt){
  class Miaov extends Component {
    render(){
      return <Compoennt {...this.props} title="我是通用的一句话" />
    }
  }
  return Miaov;
}

export default common;