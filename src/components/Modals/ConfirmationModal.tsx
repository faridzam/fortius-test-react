import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { ModalType } from "../../types/generalTypes"
import SecondaryButton from "../Buttons/SecondaryButton"

type ConfirmationModalType = ModalType & {
  label: string,
  title: string,
  onOpen: () => void,
  onConfirm: () => void,
}

export default function ConfirmationModal(props: ConfirmationModalType){
  const {
    label,
    title,
    children,
    isOpen,
    onOpen,
    onClose,
    onConfirm,
  } = props

  return (
    <>
      <SecondaryButton
        label={label}
        onClick={onOpen}
      />
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{color: '#555'}}>Cancel</Button>
          <Button onClick={onConfirm} autoFocus sx={{color: '#555'}}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}