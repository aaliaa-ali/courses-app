import { ErrorMessage, Field } from "formik";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function RadioButton(props) {
  let { name, options, label } = props;

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <Field name={name}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <div key={option.key}>
                    <FormControlLabel
                      {...field}
                      value={option.value}
                      control={<Radio />}
                      label={option.value}
                    />
                  </div>
                );
              });
            }}
          </Field>
        </RadioGroup>
      </FormControl>
      {/* <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input {...field} type="radio" value={option.value} />
                <label>{option.value}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} /> */}
    </div>
  );
}

export default RadioButton;
