import { RoleType } from "../../role/types/RoleTypes"

export type EmployeeType = {
  id?: number,
  role: RoleType,
  name: string,
  salary: number,
}

export type EmployeeContextType = {
  employees: EmployeeType[],
  setEmployees: (val: EmployeeType[]) => void,
  getEmployees: () => void,
}