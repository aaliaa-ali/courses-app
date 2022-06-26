import React from "react";
import { useSelector } from "react-redux";
import AddCourseDetails from "./addCourseDetailsView/AddCourseDetails";
import AddLessons from "./addLessonView/AddLessons";
import CoursePreviw from "./coursePreviewView/CoursePreviw";

function AddNewCourse() {
  const activeStep = useSelector((state) => state.stepper);
  console.log('activeStep', activeStep)

  switch (activeStep) {
    case 0:
      return <AddLessons />;
    case 1:
      return <AddCourseDetails />;
    case 2:
      return <CoursePreviw />;
    default:
      break;
  }
}

export default AddNewCourse;
