<template>
  <li :class="{completed: option.checked}">
      <div class="view">
          <input 
            class="toggle" 
            type="checkbox" 
            :checked="option.checked"
            @change="changeChecked"
          />
          <label>{{option.title}}</label>
          <button class="destroy"></button>
      </div>
      <input class="edit" />
  </li>
</template>
<script>
/* completed editing */
  export default {
   props:{
     option: {
       type: Object,
       default(){
         return {}
       }
     }
   },
   methods:{
     changeChecked(e){
       
       this.$store.commit('updateOneChcked',{
         id:this.option.id,
         checked: e.target.checked
       })
     }
   }
  }
</script>
