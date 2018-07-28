function reducer(state={},action){
  switch (action.type) {
    case 'add':
      return {
        ...state,
        n: ++state.n
      }
      break;
    case 'jian':
      return {
        ...state,
        n: --state.n
      }
      break;
  
    default:
      return state;
      break;
  }
}

export default reducer;