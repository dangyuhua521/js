import React, { Component } from 'react';
import Test from './components/test'
import AddCom from './components/addCom'
import Miaov1 from './test-component/miaov1'
import Miaov2 from './test-component/miaov2'
import Miaov3 from './test-component/miaov3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <AddCom />
        <Miaov1 abc={10} />
        <Miaov2 />
        <Miaov3 />
      </div>
    );
  }
}

export default App;
