<template>
  <li :class="{completed: option.checked,editing: isEdit}">
      <div class="view">
          <input 
            class="toggle" 
            type="checkbox" 
            v-model="option.checked"
          />
          <label @dblclick="editHandler">{{option.title}}</label>
          <button class="destroy" @click="$store.commit('removeOneById',{id: option.id})"></button>
      </div>
      <input 
        class="edit" v-model="value" 
        @blur="editDone"
        @keydown.13="editDone"
        @keydown.esc="cancelEdit"
        ref="input"
      />
  </li>
</template>
<script>
/* completed editing */
  export default {
   props:{
     isEdit:{
       type: Boolean,
       default: false
     },
     option: {
       type: Object,
       default(){
         return {}
       }
     }
   },
   data(){
     return {
       value: this.option.title,
       isKeydown: false  // 记录是否按下键盘了，目的是按了键盘后不要触发blur
     }
   },
   computed:{
     oneChecked:{
       get(){
        return this.option.checked;
      },
      set(newValue){
        this.$store.commit('updateOneChcked',{
          id: this.option.id,
          checked: newValue
        })
      }
     }
   },
   methods:{
     editHandler(){
      // this.isEdit = true;
      // 通知父级编辑的id
       this.$emit('add-edit-id',{
         id: this.option.id
       })

        this.$nextTick(() => {
          this.$refs.input.focus();
        })

     },
     editDone(e){
       console.log('按了键盘')
       // 如果按了esc，就不走blur了
       if(this.isKeydown) {
         this.isKeydown = false;
         return
       };
       console.log('blur触发一次')
       this.$emit('add-edit-id',{
         id: ''
       })
       // 如果恩了13，enter就不走了，走的是blur
      if(e.keyCode === 13) return;
      console.log('99999999999999')
        this.$store.commit('updatedTitleById', {
         id: this.option.id,
         title: this.value
       })
     },
     cancelEdit(){
       // this.option.title 就是没有编辑之前的值，即便是编辑了，也不影响这个值，为什么不影响呢？
       // 只有blur和enter的时候才改变title的值，在之前是不会改变的
       //console.log(this.option.title)

       this.$emit('add-edit-id',{
         id: ''
       })
       this.value = this.option.title;

       this.isKeydown = true;
     }
   }
  }
</script>
