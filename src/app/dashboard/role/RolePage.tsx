import { Box, Typography } from "@mui/material";
import ColumnContainer from "../../../components/Containers/ColumnContainer";
import RowContainer from "../../../components/Containers/RowContainer";
import RoleCards from "./components/RoleCards";
import RoleModal from "./components/RoleModal";
import RoleContextProvider from "./components/RoleProvider";

export default function RolePage(){

  return(
    <RoleContextProvider>
      <ColumnContainer container>
        <RowContainer justifyContent="space-between">
          <Typography variant="h6" noWrap component="div">
            Role
          </Typography>
          <Box width={'100px'}><RoleModal modalType="Create"/></Box>
        </RowContainer>
        <RoleCards />
      </ColumnContainer>
    </RoleContextProvider>
  )
}