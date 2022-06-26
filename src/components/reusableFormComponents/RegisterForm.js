import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormController from "./FormController";
function RegisterForm() {
  let onSubmit = (values) => console.log("hello", values);

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),
    gender: Yup.string().required("gender is required!"),
    modeOfContact: Yup.array()
      .required("Mode of Contact is required!")
      .min(1, "Mode of Contact is required!"),
    phone: Yup.string().when("modeOfContact[0]", {
      is: "phone",
      then: Yup.string().required("please enter your phone number"),
    }),
  });
  let genderOptions = [
    { key: "femele", value: "femele" },
    { key: "male", value: "male" },
  ];
  let modeOfContact = [
    { key: "phone", value: "phone" },
    { key: "mail", value: "mail" },
  ];
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormController control="input" name="name" label="Name" />
              <FormController control="input" name="email" label="Email" />
              <FormController
                control="radio"
                name="gender"
                label="Select Gender"
                options={genderOptions}
              />
              <FormController
                control="checkbox"
                name="modeOfContact"
                label="Select mode of contact"
                options={modeOfContact}
              />
              <FormController
                control="input"
                name="phone"
                label="Phone Number"
              />

              <button type="submit">submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegisterForm;
