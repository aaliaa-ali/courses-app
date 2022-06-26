import React from "react";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import DropDown from "./components/DropDown";


function FormController(props) {
  let { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
      case "dropdown":
      return <DropDown {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
  }
}

export default FormController;
