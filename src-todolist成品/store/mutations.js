let mutations = {
  // 更新一条
  updateOneChcked(state, plaload) {  // {id,checked}
    console.log(plaload.checked === false)
    //if (plaload.checked === false) return;
    let item = state.list.find(item => item.id === plaload.id);
    if (item) {
      item.checked = plaload.checked;
    }
  },
  // toggle全选
  updateAllChecked(state, plaload) { // {checked}
    state.list.forEach(item => item.checked = plaload.checked)
  },
  updatedTitleById(state, plaload) { // {id,title}
    let item = state.list.find(item => item.id === plaload.id);
    if (item) {
      item.title = plaload.title;
    }
  },
  removeOneById(state, plaload) { // {id}
    let index = state.list.findIndex(item => item.id === plaload.id)
    if (index !== -1) {
      state.list.splice(index, 1)
    }

  },
  addTodo(state, plaload) { // {title}
    state.list.push({
      id: Date.now(),
      title: plaload.title,
      checked: false
    })
  },
  changeHash(state, plaload) {  // {hash}
    state.hash = plaload.hash
  }
}

export default mutations;