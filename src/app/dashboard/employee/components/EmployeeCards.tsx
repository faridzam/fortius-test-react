import { useEffect } from "react";
import RowContainer from "../../../../components/Containers/RowContainer";
import { useEmployeeContext } from "../hooks/useEmployee";
import EmployeeCard from "./EmployeeCard";


export default function EmployeeCards(){
  const {employees, getEmployees} = useEmployeeContext();

  useEffect(() => {
    getEmployees()
  }, [])
  return(
    <RowContainer container>
      {
        employees?.map((employee, index) => (
          <EmployeeCard
            key={`card-employee-index-${index}`}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
          />
        ))
      }
    </RowContainer>
  )
}