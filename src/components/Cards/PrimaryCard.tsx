import { Box, Paper } from "@mui/material";
import { CardType } from "../../types/generalTypes";
import ColumnContainer from "../Containers/ColumnContainer";

export default function PrimaryCards(params:CardType){

  const {
    children,
    ...props
  } = params;

  return(
    <Box
      component={Paper}
      elevation={1}
      padding={'12px'}
      width={'300px'}
      {...props}
    >
      <ColumnContainer container>
        {children}
      </ColumnContainer>
    </Box>
  )
  
}