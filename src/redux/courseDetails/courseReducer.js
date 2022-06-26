const initialState = {
  courseName: "",
  instructorName: "",
  courcePrice: "",
  courseDuration: "",
  instructorImg: "",
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
export default courseReducer;
