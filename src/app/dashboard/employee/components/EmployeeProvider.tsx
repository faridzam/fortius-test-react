import { createContext, useState } from "react";
import { apiRequest } from "../../../../utils/apiRequest/apiRequest";
import { EmployeeContextType, EmployeeType } from "../types/EmployeeTypes";

export const EmployeeSettings = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: (val: EmployeeType[]) => {},
  getEmployees: () => {},
});

export default function EmployeeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);

  const getEmployees = async () => {
    try {
      const response = await apiRequest.get('/employee');
      setEmployees(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    employees,
    setEmployees: (val: EmployeeType[]) => console.log(val),
    getEmployees,
  };

  return(
    <EmployeeSettings.Provider value={value}>
      {children}
    </EmployeeSettings.Provider>
  )
}