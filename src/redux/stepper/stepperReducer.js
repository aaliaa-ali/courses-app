const stepperReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return state + 1;
    case "LAST_STEP":
      return state - 1;
    default:
      return state;
  }
};
export default stepperReducer;
