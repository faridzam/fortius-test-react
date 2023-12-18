import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import ColumnContainer from "../../../../components/Containers/ColumnContainer";
import CustomTextField from "../../../../components/Inputs/CustomTextField";
import useRole from "../hooks/useRole";
import { RoleType } from "../types/RoleTypes";

export default function RoleModal(props: {modalType: string, role?: RoleType}){

  const {isModalOpen, nameRef, handleOpenModal, handleCloseModal, handleSubmitModal} = useRole();

  return(
    <>
      <PrimaryButton
        label={props.modalType}
        onClick={() => handleOpenModal(props.modalType)}
      />
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
      >
        <DialogTitle>
          {props.modalType} role
        </DialogTitle>
        <DialogContent>
          <ColumnContainer container>
            <CustomTextField
              label="name"
              placeholder="name"
              ref={nameRef}
              defaultValue={props.role?.name || ''}
            />
          </ColumnContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} sx={{color: '#555'}}>Cancel</Button>
          <Button onClick={() => handleSubmitModal(props.modalType, props.role?.id)} autoFocus sx={{color: '#555'}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}