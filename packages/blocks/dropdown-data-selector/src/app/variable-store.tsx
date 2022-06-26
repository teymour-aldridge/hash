import React, { useState } from "react";
import { TextField } from "@mui/material";

export type VariableStoreProps = {
  disabled: any;
  variableName: string | undefined;
  setVariableName: (x: any) => void;
};

export const VariableStore: React.FunctionComponent<VariableStoreProps> = ({
  disabled,
  variableName,
  setVariableName,
}) => {
  const [value, setValue] = useState(variableName ?? "");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    console.log(`Setting Variable Name: ${event.target.value}`);
    setVariableName(event.target.value);
  };

  return (
    <TextField
      disabled={disabled == null}
      id="selection-variable"
      label="Store Selection under"
      variant="outlined"
      value={value}
      onChange={handleChange}
      onBlur={handleSubmit}
    />
  );
};
