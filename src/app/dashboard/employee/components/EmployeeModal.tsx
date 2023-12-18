import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect } from "react";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import ColumnContainer from "../../../../components/Containers/ColumnContainer";
import CustomSelect from "../../../../components/Inputs/CustomSelect";
import CustomTextField from "../../../../components/Inputs/CustomTextField";
import useEmployee from "../hooks/useEmployee";
import { EmployeeType } from "../types/EmployeeTypes";

export default function EmployeeModal(props: {modalType: string, employee?: EmployeeType}){

  const {isModalOpen, handleOpenModal, handleCloseModal, nameRef, salaryRef, roleRef, getRoles, roles, handleSubmitModal} = useEmployee();

  useEffect(() => {
    getRoles()
  }, [props.modalType])
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
          {props.modalType} employee
        </DialogTitle>
        <DialogContent>
          <ColumnContainer container>
            <CustomTextField
              label="name"
              placeholder="name"
              ref={nameRef}
              defaultValue={props.employee?.name || ''}
            />
            <CustomTextField
              label="salary"
              placeholder="salary"
              type="number"
              ref={salaryRef}
              defaultValue={props.employee?.salary.toString() || ''}
            />
            <CustomSelect
              label="role"
              placeholder="role"
              options={roles}
              ref={roleRef}
              defaultValue={props.employee?.role.toString() || ''}
            />
          </ColumnContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} sx={{color: '#555'}}>Cancel</Button>
          <Button onClick={() => handleSubmitModal(props.modalType, props.employee?.id)} autoFocus sx={{color: '#555'}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}