import { Button } from "@mui/material";
import React from "react";
import { ButtonInterface } from "../../types/generalTypes";

const PrimaryButton: React.FC<ButtonInterface> = props => {
  return(
    <Button
      {...props}
      fullWidth
      variant="contained"
      disabled={props.isDisabled}
      onClick={() => props.onClick()}
      sx={{
        fontSize: '16px',
        color: '#FFFFFF',
        textTransform: 'none',
        background: 'linear-gradient(to right, #F7C113, #EDCD67) !important',
        boxShadow: 'none'
      }}
    >
      {props.label}
    </Button>
  )
}

export default PrimaryButton;