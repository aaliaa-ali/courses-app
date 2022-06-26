const initialState = {
  lessons: [
    {
      name: "",
      level: "",
    },
  ],
};
const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LESSONS":
      return action.payload;
    default:
      return state;
  }
};
export default lessonsReducer;
