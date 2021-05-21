const reducer = (state = { count: 0, loading: false,data:[] }, action) => {
  // console.log(state,action);
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'TOGGLE_LOADING':
      return { ...state, loading: !state.loading }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    
    default:
      return { ...state }
  }
}
export default reducer;
