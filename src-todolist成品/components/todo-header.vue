<template>
  <header class="header" >
      <h1>todos</h1>
      <input 
        class="new-todo" 
        placeholder="请输入内容" 
        @keydown.13="addTodo"
        v-model="value"
      />
  </header>
</template>
<script>
export default {
  data(){
    return {
      value: ''
    }
  },
  methods:{
    addTodo(){
      this.$store.commit('addTodo',{
        title: this.value
      })
      this.value = '';
    }
  }
}
</script>
