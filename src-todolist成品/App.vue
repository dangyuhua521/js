<template>
  <section class="todoapp">
    <todo-header></todo-header>
    <todo-list v-show="!$store.getters.isEmpty"></todo-list>
    <todo-footer  v-show="!$store.getters.isEmpty"></todo-footer>
  </section>
</template>

<script>
import todoHeader from './components/todo-header'
import todoList from './components/todo-list'
import todoFooter from './components/todo-footer'

export default {
  name: 'App',
  components: {todoHeader,todoList,todoFooter},
  /* watch:{
    '$store.state.list':{
      handler(){
        localStorage.setItem('miaov11111',JSON.stringify(this.$store.state.list))
      },
      deep: true
    }
  }, */
  methods:{
    getHash(){
      let hash = window.location.hash;
      let hashValue ='all';
      if(hash){
        hashValue = hash.slice(2)
      }
      console.log(hashValue)
      this.$store.commit('changeHash',{
        hash: hashValue
      })
    }
  },
  mounted() {
    this.getHash();
    window.addEventListener('hashchange',this.getHash)
  },
}
</script>
