import React, { Component } from 'react';
import News from './components/News'

function AhowH2(props){
  return (
    <h2>{props.value}</h2>
  )
}
class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <News />
        <AhowH2 value='定制的' />
      </section>
    );
  }
}

export default App;
