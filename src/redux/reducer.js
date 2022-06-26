import { combineReducers } from "redux";
import lessonsReducer from "./lessons/lessonsReducer";
import courseReducer from "./courseDetails/courseReducer";
import stepperReducer from "./stepper/stepperReducer";






const rootReducer = combineReducers({
  lessons: lessonsReducer,
  course: courseReducer,
  stepper:stepperReducer
});
export default rootReducer;
