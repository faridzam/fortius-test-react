import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import { SelectOption } from "../../types/generalTypes";

type colorOptions = 'transparent' | 'white';

interface CustomSelectInterface {
  defaultValue?: string;
  label: string;
  placeholder: string;
  value?: string;
  options?: SelectOption[];
  isDisabled?: boolean;
  isError?: boolean;
  textHelper?: string;
  color?: colorOptions;
  name?: string;
  onChange?: (val: string, e?: SelectChangeEvent<string>) => void;
}

const CustomSelect = React.forwardRef<HTMLInputElement, CustomSelectInterface>( function CustomSelect({
  defaultValue = "",
  isDisabled = false,
  isError = false,
  label,
  options = [],
  placeholder,
  value = '',
  textHelper = '',
  color = 'transparent',
  name = '',
  onChange = () => {},
}, propsRef){
  return(
    <FormControl variant="outlined" fullWidth>
      {
        label !== ''
        ? <Typography
          id="custom-textfield-label"
          sx={{
            marginBottom: '4px',
            fontSize: '13px',
            color: color === 'white' ? '#fff' : '#4B465C'
          }}
        >
          {label}
        </Typography>
        : null
      }
      <Select
        defaultValue={defaultValue}
        value={value || undefined}
        inputRef={propsRef}
        disabled={isDisabled}
        error={isError}
        fullWidth
        size="small"
        name={name}
        placeholder={placeholder}
        id="custom-textfield"
        aria-describedby="custom-text-field-helper-text"
        onChange={(e) => onChange(e.target.value, e)}
        inputProps={{
          'aria-label': 'textfield',
        }}
        sx={{
          borderRadius: '6px',
          // color: '#555',
          backgroundColor: color === 'white' ? '#fff' : undefined,
        }}
      >
        <MenuItem value="" disabled sx={{ visibility: 'hidden', height: '0px !important' }}>
          <Typography
            sx={{
              fontWeight: 500,
              color: 'rgba(75, 70, 92, 0.3)',
          }}
          >
              {placeholder}
          </Typography>
        </MenuItem>
        {options?.map((option, index) => (
          <MenuItem key={`custom-option-select-${index}`} value={option.value} sx={{color: '#555'}}>{option?.label}</MenuItem>
        ))}
      </Select>
      <FormHelperText id="custom-text-field-helper-text" sx={{margin: 0}}>{textHelper}</FormHelperText>
    </FormControl>
  )
})

export default CustomSelect;