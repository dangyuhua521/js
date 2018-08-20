<template>
  <section class="main">
      <input 
        class="toggle-all" 
        type="checkbox"
        v-model="isCheckedAll" 
    />
      <ul class="todo-list">
          <todo-item 
            v-for="item in $store.getters.filtersList"
            :key="item.id"
            :option="item"
            @add-edit-id="changeEditIdHandle"
            :is-edit="editId === item.id"
        ></todo-item>
      </ul>
  </section>
</template>
<script>
    import todoItem from './todo-item.vue'
    export default {
        components: {todoItem},
        data(){
            return {
                editId: '' // 需要编辑的id
            }
        },
        computed:{
            isCheckedAll:{
                get(){
                    return this.$store.getters.isCheckedAll
                },
                set(newVal){
                    this.$store.commit('updateAllChecked',{
                        checked: newVal
                    })
                }
            }
        },
        methods:{
            changeEditIdHandle(obj){
                this.editId = obj.id;
            }
        }
    }
</script>
