const reducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "ADD_BY") {
    return state + action.payload;
  }

  return state;
};

export default reducer;
