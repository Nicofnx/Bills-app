import React from 'react';
import { Input, Label } from './FormInput.styled';

const FormInput = ({ label, type, name, value, required, width, onChange }) => {
  return (
    <Label width={width}>
      {label}
      <Input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </Label>
  );
};

export default FormInput;