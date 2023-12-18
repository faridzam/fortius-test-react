import { Grid } from "@mui/material";
import { ContainerType } from "../../types/generalTypes";

export default function RowContainer(params:ContainerType) {
  const {
    container = true,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    children,
  } = params;
  return(
    <Grid
      container={container}
      direction={'row'}
      display={'flex'}
      gap={'16px'}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Grid>
  );
}