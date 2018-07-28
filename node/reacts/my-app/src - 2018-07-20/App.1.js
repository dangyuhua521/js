import React from 'react';
import News from './components/news';
import Tab from './components/tab';

let newsDate={
    title:'新闻'
}

let one = [
    {
    title: '新闻',
    list: ['新闻列表', '新闻列表', '新闻列表']
    },
    {
    title: '娱乐',
    list: ['娱乐列表', '娱乐列表', '娱乐列表']
    }, {
    title: '体育',
    list: ['体育列表', '体育列表', '体育列表']
    }
    ]
let two = [
    {
    title: '新闻2',
    list: ['新闻列表', '新闻列表', '新闻列表']
    },
    {
    title: '娱乐2',
    list: ['娱乐列表', '娱乐列表', '娱乐列表']
    }, {
    title: '体育2',
    list: ['体育列表', '体育列表', '体育列表']
    }
    ]    
class App extends React.Component{
    render(){
        return(
            <div>
                <News {...newsDate}></News>
                <Tab data={one}/>
                <Tab data={two}/>
            </div>
        )
    }
}
export default App;