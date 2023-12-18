import { Button } from "@mui/material";
import React from "react";
import { ButtonInterface } from "../../types/generalTypes";

const SecondaryButton: React.FC<ButtonInterface> = props => {
  return(
    <Button
      {...props}
      fullWidth
      variant="contained"
      disabled={props.isDisabled}
      onClick={() => props.onClick()}
      sx={{
        fontSize: '16px',
        color: '#F7C113',
        textTransform: 'none',
        background: 'transparent !important',
        border: '1px solid #F7C113',
        boxShadow: 'none'
      }}
    >
      {props.label}
    </Button>
  )
}

export default SecondaryButton;