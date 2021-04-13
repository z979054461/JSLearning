export default function counter2(state = { count: 12 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
