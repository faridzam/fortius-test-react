export type EmployeeType = {
  id?: number,
  role: number,
  name: string,
  salary: number,
}

export type EmployeeContextType = {
  employees: EmployeeType[],
  setEmployees: (val: EmployeeType[]) => void,
  getEmployees: () => void,
}