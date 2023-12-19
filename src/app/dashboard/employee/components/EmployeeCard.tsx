import PrimaryCards from "../../../../components/Cards/PrimaryCard";
import ColumnContainer from "../../../../components/Containers/ColumnContainer";
import RowContainer from "../../../../components/Containers/RowContainer";
import { EmployeeType } from "../types/EmployeeTypes";
import EmployeeDeleteModal from "./EmployeeDeleteModal";
import EmployeeModal from "./EmployeeModal";

export default function EmployeeCard(params: EmployeeType){

  const {
    id = 0,
    name,
    role,
    salary,
  } = params;

  return(
    <PrimaryCards key={`card-employee-${id}`}>
      <ColumnContainer container>
        <RowContainer>
          name    : {name}
        </RowContainer>
        <RowContainer>
          role    : {role.name}
        </RowContainer>
        <RowContainer>
          salary  : {salary}
        </RowContainer>
        <EmployeeModal modalType="Update" employee={params}/>
        <EmployeeDeleteModal id={id} employee={params} />
      </ColumnContainer>
    </PrimaryCards>
  )
}