import { createStore } from 'redux';
let data={
    title:'hello',
    n:90
}
 //规则函数接收两个参数 1.初始画的数据 2.对象，修改数据的描述对象
//action 要接收一个对象，对象中必须有一个type 动作的描述，做什么事情

//返回值，就是容器的数据值
//执行一个动作修改了数据，必须返回新对象
function xiao(state={}, action){
    //{type:'changeTitle',newTitle:123}
    switch (action.type){
        case 'changeTitle':
        return {
            ...state,
            title:action.newTitle
        }
        break;
        default:
            return state;
    }
}

//createStore(reduer(修改数据的规则-函数)，[c初始数据])；
//创建容器，要写上修改时数据的规则函数，可选的初始化数据

let store = createStore(xiao,data,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/*
容器对象会提供三个方法
dispatch()
getState()
subscribe();
*/
console.log('getState',store.getState())
store.subscribe(function(){
    console.log('获取state',store.getState())
})
setTimeout(()=>{
    store.dispatch({type:
    'changeTitle',newTitle:'12345'});
    store.dispatch({type:'xiao',n:123456});
},2000)