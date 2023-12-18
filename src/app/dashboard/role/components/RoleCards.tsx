import { useEffect } from "react";
import RowContainer from "../../../../components/Containers/RowContainer";
import { useRoleContext } from "../hooks/useRole";
import EmployeeCard from "./RoleCard";


export default function RoleCards(){
  const {roles, getRoles} = useRoleContext();

  useEffect(() => {
    getRoles()
  }, [])
  return(
    <RowContainer container>
      {
        roles?.map((role, index) => (
          <EmployeeCard
            key={`card-employee-index-${index}`}
            id={role.id}
            name={role.name}
          />
        ))
      }
    </RowContainer>
  )
}