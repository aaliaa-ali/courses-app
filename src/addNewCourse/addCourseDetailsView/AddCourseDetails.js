import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import FormController from "../../components/reusableFormComponents/FormController";
import { useDispatch, useSelector } from "react-redux";
import { addCourseDetails } from "../../redux/courseDetails/courseActions";
import { toLastStep } from "../../redux/stepper/stepperActions";
import { Avatar, Button, TextField } from "@mui/material";
import { toNextStep } from "../../redux/stepper/stepperActions";

function AddCourseDetails() {
  const courseDetails = useSelector((state) => state.course);
  const dispatch = useDispatch();

  let onSubmit = (values) => {
    console.log("values", values);
    dispatch(addCourseDetails(values));
    dispatch(toNextStep());
  };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
  const NUMBERS_REJX = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

  const initialValues = courseDetails;

  const validationSchema = Yup.object({
    courseName: Yup.string().required("Course Name Is Required!"),
    instructorName: Yup.string().required("Instructor Name Is Required!"),

    courcePrice: Yup.string()
      .required("Course Price Is Required!")
      .matches(NUMBERS_REJX, "Please enter Valid Price"),

    courseDuration: Yup.string()
      .required("Course Duration Is Required!")
      .matches(NUMBERS_REJX, "Please enter Valid Duration"),
    instructorImg: Yup.mixed()
      .notRequired()
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ errors, values, isValid, handleBlur, setFieldValue }) => {
          return (
            <Form>
              <Box sx={{ width: "60%", mx: "auto" }}>
                <Box sx={{ display: "flex", m: 2 }}>
                  <FormController
                    control="input"
                    name="courseName"
                    label="Course Name"
                  />
                </Box>

                <Box sx={{ display: "flex", m: 2 }}>
                  <FormController
                    control="input"
                    name="courseDuration"
                    label="Course Duration    Hrs"
                  />
                  <FormController
                    control="input"
                    name="courcePrice"
                    label="Course Price $"
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                  <Box sx={{ width: "50%", mr: 2 }}>
                    <FormController
                      control="input"
                      name="instructorName"
                      label="Instructor Name"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      m: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {values.instructorImg ? (
                      <Avatar
                      sx={{mr:1}}
                        alt="istructor img"
                        src={URL.createObjectURL(values.instructorImg)}
                      />
                    ) : null}
                    <TextField
                      name="instructorImg"
                      id="filled-error-helper-text"
                      variant="filled"
                      type="file"
                      onBlur={handleBlur}
                      onChange={(e) =>
                        setFieldValue("instructorImg", e.target.files[0])
                      }
                      error={!!errors.instructorImg}
                      helperText={errors.instructorImg}
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{ backgroundColor: "white", color: "black", m: 1 }}
                  variant="contained"
                  onClick={() => dispatch(toLastStep())}
                >
                  Back
                </Button>
                <Button
                  sx={{ backgroundColor: "white", color: "black", m: 1 }}
                  variant="contained"
                  disabled={!isValid}
                  type="submit"
                >
                  Next Step
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddCourseDetails;
