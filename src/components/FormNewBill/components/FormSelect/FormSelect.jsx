import React from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SelectContainer, StyledButton } from './FormSelect.styled';

const FormSelect = ({ label, onChange, productOption }) => {
  const getOptionLabel = (option) => option ? `${option.category} - ${option.title} ($${option.price})` : '';
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAdd = () => {
    if (onChange && value) {
      onChange(value);
    }
    setInputValue('');
    setValue(null);
  };

  return (
    <SelectContainer>
    <Autocomplete
      value={value}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={handleChange}
      options={productOption}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => <TextField {...params} size="medium" placeholder="Seleccione un producto" variant="outlined" />}
    />
    <StyledButton type="button" onClick={handleAdd}><AddCircleIcon /></StyledButton>
    </SelectContainer>
  );
};

export default FormSelect;
