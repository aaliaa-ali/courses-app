import { Field, getIn } from "formik";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

function CheckBox(props) {
  const [difficulty, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let { name, options, label } = props;
  return (
    <Field name={name}>
      {({ field, form,touched,meta }) => {
        console.log('touched', touched)
        return (
          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120 }}
            error={!!getIn(form.errors, props.name)&&meta.touched}
          >
            <InputLabel id="demo-simple-select-filled-label">
              {label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={difficulty}
              onChange={handleChange}
              {...field}
            >
              {options.map((option) => {
                return (
                  <MenuItem value={option.value} key={option.key}>
                    {option.value}
                  </MenuItem>
                );
              })}
            </Select>

            <FormHelperText>{meta.touched?getIn(form.errors, props.name):''}</FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default CheckBox;
