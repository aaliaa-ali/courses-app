import { Field, getIn } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
function Input(props) {
  let { name, label, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form ,meta }) => {
        console.log('first', field)
        return (
            <TextField
            sx={{width:1,m:1}}
              error={!!getIn(form.errors,name) && getIn(form.touched,name)}
              id="filled-error-helper-text"
              label={label}
              helperText={getIn(form.touched, name)?getIn(form.errors,name):''}
              variant="filled"
              {...field}
            />
        );
      }}
    </Field>
  );
}

export default Input;
