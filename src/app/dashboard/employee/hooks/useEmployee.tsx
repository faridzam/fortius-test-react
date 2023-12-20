import { useContext, useRef, useState } from "react";
import { SelectOption } from "../../../../types/generalTypes";
import { apiRequest } from "../../../../utils/apiRequest/apiRequest";
import { EmployeeSettings } from "../components/EmployeeProvider";

export const useEmployeeContext = () => useContext(EmployeeSettings);

export default function useEmployee(){
  const {getEmployees} = useEmployeeContext()

  // get roles
  const [roles, setRoles] = useState<SelectOption[]>([])
  const getRoles = async () => {
    try {
      const response = await apiRequest.get('/role');
      const mapRoleFromResponse = response.data.data.map((
        role: {name: string, id: number}): SelectOption => ({ label: role.name, value: role.id.toString() }
      ))
      setRoles(mapRoleFromResponse);
    } catch (error) {
      console.log(error)
    }
  }

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
  const salaryRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  const handleSubmitModal = async (type: string, id?: number) => {
    try {
      switch (type) {
        case 'Create':
          const responseCreate = await apiRequest.post('/employee', {
            name: nameRef.current?.value,
            salary: salaryRef.current?.value,
            role: roleRef.current?.value
          });
          break;
        case 'Update':
          const responseUpdate = await apiRequest.patch(`/employee/${id}`, {
            name: nameRef.current?.value,
            salary: salaryRef.current?.value,
            role: roleRef.current?.value
          });
          break;
      
        default:

          break;
        }
      getEmployees()
      handleCloseModal();
    } catch (error) {
      console.log(error)
    }
  }

  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
  const handleOpenConfirmation = () => {
    setIsOpenConfirmation(true)
  }
  const handleCloseConfirmation = () => {
    setIsOpenConfirmation(false)
  }

  const handleDeleteEmployee = async (id: number) => {
    try {
      const responseDelete = await apiRequest.delete(`/employee/${id}`);
      getEmployees()
      handleCloseConfirmation();
    } catch (error) {
      console.log(error)
    }
  }

  return{
    isModalOpen,
    modalType,
    handleOpenModal,
    handleCloseModal,
    nameRef,
    salaryRef,
    roleRef,
    getRoles,
    roles,
    handleSubmitModal,
    isOpenConfirmation,
    handleOpenConfirmation,
    handleCloseConfirmation,
    handleDeleteEmployee,
  }
}