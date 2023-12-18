import { Typography } from "@mui/material";
import ConfirmationModal from "../../../../components/Modals/ConfirmationModal";
import useRole from "../hooks/useRole";
import { RoleType } from "../types/RoleTypes";

export default function RoleDeleteModal(props: {id: number, role: RoleType}){

  const {isOpenConfirmation, handleOpenConfirmation, handleCloseConfirmation, handleDeleteRole} = useRole();
  return(
    <ConfirmationModal
      isOpen={isOpenConfirmation}
      onOpen={handleOpenConfirmation}
      onClose={handleCloseConfirmation}
      onConfirm={() => handleDeleteRole(props.id)}
      label="Delete"
      title="Delete Role"
    >
      <Typography>
        are you sure want to delete {props.role.name}?
      </Typography> 
    </ConfirmationModal>
  )
}