import { Grid } from "@mui/material";
import { ContainerType } from "../../types/generalTypes";

export default function ColumnContainer(params:ContainerType) {
  const {
    container = true,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    children,
    ...props
  } = params;
  return(
    <Grid
      {...props}
      container={container}
      direction={'column'}
      display={'flex'}
      gap={'16px'}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Grid>
  );
}