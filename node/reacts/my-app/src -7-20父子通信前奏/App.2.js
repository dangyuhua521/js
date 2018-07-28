import React from 'react';
import Tab from './components/tab';

class App extends React.Component{
    render(){
        let {color}=this.state;
        console.log('父级渲染...')
        return (
            <div>
            
            {/** <Tab data={one}/>
              <Tab data={two}/> */} 
            </div>
        )
    }
}
export default App;