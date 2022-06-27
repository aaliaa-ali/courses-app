import React from "react";
import * as Yup from "yup";
import { Formik, Form, FieldArray } from "formik";
import FormController from "../../components/reusableFormComponents/FormController";
import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import classes from "./AddLessons.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addLessons } from "../../redux/lessons/lessonsActions";
import { toNextStep } from "../../redux/stepper/stepperActions";
import { Button } from "@mui/material";

function AddLessons() {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  
  let onSubmit = (values) => {
    dispatch(addLessons(values));
    dispatch(toNextStep());
  };

  const initialValues = lessons;
  const validationSchema = Yup.object().shape({
    lessons: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required("Lesson Name is Required!"),
          level: Yup.string().required("Level is required!"),
        })
      )
      .required("Must have friends"),
  });

  let difficultyOptions = [
    { key: "Beginner", value: "Beginner" },
    { key: "Intermediate", value: "Intermediate" },
    { key: "Advanced", value: "Advanced" },
  ];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ errors, values, isValid }) => {
          return (
            <Form>
              <FieldArray name="lessons">
                {({ push, remove }) => (
                  <React.Fragment>
                    {values.lessons &&
                      values.lessons.length > 0 &&
                      values.lessons.map((lesson, index) => (
                        <Box
                          sx={{ display: "flex", justifyContent: "center" }}
                          key={index}
                        >
                          <div className={classes.CenterContient} style={{width:'30%'}}>
                            <FormController
                              control="input"
                              name={`lessons[${index}].name`}
                              label="Lesson Tittle"
                            />
                          </div>
                          <FormController
                          style={{width:'30%'}}
                            control="dropdown"
                            name={`lessons[${index}].level`}
                            label="Level"
                            options={difficultyOptions}
                          />

                          {values.lessons.length == 1 ? null : (
                            <a
                              className={classes.CenterContient}
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <DeleteForeverIcon />
                            </a>
                          )}
                        </Box>
                      ))}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <a
                        className={classes.AddButton}
                        onClick={() => push({ name: "", level: "" })}
                      >
                        <AddIcon />
                      </a>
                    </Box>
                  </React.Fragment>
                )}
              </FieldArray>
              <Box>
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

export default AddLessons;
