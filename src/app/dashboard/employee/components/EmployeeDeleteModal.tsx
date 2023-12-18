import { Typography } from "@mui/material";
import ConfirmationModal from "../../../../components/Modals/ConfirmationModal";
import useEmployee from "../hooks/useEmployee";
import { EmployeeType } from "../types/EmployeeTypes";

export default function EmployeeDeleteModal(props: {id: number, employee: EmployeeType}){

  const {isOpenConfirmation, handleOpenConfirmation, handleCloseConfirmation, handleDeleteEmployee} = useEmployee();
  return(
    <ConfirmationModal
      isOpen={isOpenConfirmation}
      onOpen={handleOpenConfirmation}
      onClose={handleCloseConfirmation}
      onConfirm={() => handleDeleteEmployee(props.id)}
      label="Delete"
      title="Delete Employee"
    >
      <Typography>
        are you sure want to delete {props.employee.name}?
      </Typography> 
    </ConfirmationModal>
  )
}