import React, { Component } from 'react';
import { Link, Route,Redirect,Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import NotFund from './components/404';

class App extends Component {


  
  render() {
    return (
      <div >
        <ul>
        <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to={{
               pathname:'/about'
            }}>about</Link>
          </li>
          <li>
            <Link to={{
               pathname:'/maio'
            }}>miao</Link>
          </li>
          <li>
            <Link to={{
               pathname:'/home'
            }}>home</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="about" render={()=>{
            return true?<About/>:<h2>暂时没有显示</h2>
          }}></Route>
          <Redirect from="miao" to="/about"/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
