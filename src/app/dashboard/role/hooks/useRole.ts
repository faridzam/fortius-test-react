import { useContext, useRef, useState } from "react";
import { apiRequest } from "../../../../utils/apiRequest/apiRequest";
import { RoleSettings } from "../components/RoleProvider";

export const useRoleContext = () => useContext(RoleSettings);

export default function useRole(){

  const {getRoles} = useRoleContext()

  // open modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<string>('')
  const handleOpenModal = (type: string) => {
    setModalType(type)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalType('')
    setIsModalOpen(false)
  }
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmitModal = async (type: string, id?: number) => {
    try {
      switch (type) {
        case 'Create':
          const responseCreate = await apiRequest.post('/role', {
            name: nameRef.current?.value,
          });
          break;
        case 'Update':
          const responseUpdate = await apiRequest.patch(`/role/${id}`, {
            name: nameRef.current?.value,
          });
          break;
      
        default:

          break;
      }
    } catch (error) {
      console.log(error)
    } finally {
      getRoles()
      handleCloseModal();
    }
  }

  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
  const handleOpenConfirmation = () => {
    setIsOpenConfirmation(true)
  }
  const handleCloseConfirmation = () => {
    setIsOpenConfirmation(false)
  }

  const handleDeleteRole = async (id: number) => {
    try {
      const responseDelete = await apiRequest.delete(`/role/${id}`);
    } catch (error) {
      console.log(error)
    } finally{
      getRoles()
      handleCloseConfirmation();
    }
  }

  return{
    isModalOpen,
    modalType,
    nameRef,
    handleOpenModal,
    handleCloseModal,
    handleSubmitModal,
    isOpenConfirmation,
    handleOpenConfirmation,
    handleCloseConfirmation,
    handleDeleteRole
  }
}