import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex);

let list = JSON.parse(localStorage.getItem('miaov11111')) || [];

// 改变list的数据都要走vuex，提交mutation
/* 
  为什么要把数据放在vuex？
    多个组件共享这些数据

*/


let store = new Vuex.Store({
  strict: true,  // 严格模式，改变state中的数据，必须提交mutation
  state: {
    hash: 'all',
    list: list
  },
  // 类似是组件中计算属性
  getters:{
    isCheckedAll(state){
      return state.list.every(item => item.checked)
    },
    isEmpty(state){  // 空 true 不为空 false
      return !state.list.length 
    },
    filtersList(state){
      if (state.hash === 'all'){
        return state.list
      } else if (state.hash === 'active'){
        return state.list.filter(item => !item.checked)
      } else if (state.hash === 'completed'){
        return state.list.filter(item => item.checked)
      }
    }
  },
  mutations: mutations
})

// 每提交一个mutation都会触发这个回调函数
// 一般是在提交mutation做一些事情
store.subscribe((mutation, state) => {
  console.log(mutation)
  // 针对某个mutation做事情
  if (mutation.type !== 'changeHash'){
    localStorage.setItem('miaov11111', JSON.stringify(state.list))
  }
  
})

console.log(store)

// 监听state中的某一个属性，当发生变化的时候会执行第二参数函数
let abc = store.watch(function (state) {
  return {
    list: state.list
  }
},function () {
  console.log('执行了')
  //abc();
})

export default store;
