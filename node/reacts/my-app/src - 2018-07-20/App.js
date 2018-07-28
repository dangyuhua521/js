import React from 'react';
import Button from './components/button'
//一个组件在另一个组件的模板中使用，称之为是子组件 另一个是父组件

class App extends React.Component{
    render(){
        return (
            <div>
                <Button value='测试' color="yellow"/>
                <Button value='测试' color="blue"/>
            </div>
        )
    }
}

export default App;