import React, { Component } from 'react';
import './style/App.css';

let listData=[]
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      listData:listData
    }
  }

  
  render() {
    return (
      <div className="wrapper">
        <Message />
        <List/>
      </div>
    );
  }
}

export default App;
