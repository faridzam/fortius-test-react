import { Box, Typography } from "@mui/material";
import ColumnContainer from "../../../components/Containers/ColumnContainer";
import RowContainer from "../../../components/Containers/RowContainer";
import EmployeeCards from "./components/EmployeeCards";
import EmployeeModal from "./components/EmployeeModal";
import EmployeeContextProvider from "./components/EmployeeProvider";

export default function EmployeePage(){

  return(
    <EmployeeContextProvider>
      <ColumnContainer>
        <RowContainer justifyContent="space-between">
          <Typography variant="h6" noWrap component="div">
            Employee
          </Typography>
          <Box width={'100px'}><EmployeeModal modalType="Create" /></Box>
        </RowContainer>
          <EmployeeCards />
      </ColumnContainer>
    </EmployeeContextProvider>
  )
}