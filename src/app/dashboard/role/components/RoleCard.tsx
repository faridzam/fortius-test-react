import PrimaryCards from "../../../../components/Cards/PrimaryCard";
import ColumnContainer from "../../../../components/Containers/ColumnContainer";
import RowContainer from "../../../../components/Containers/RowContainer";
import { RoleType } from "../types/RoleTypes";
import RoleDeleteModal from "./RoleDeleteModal";
import RoleModal from "./RoleModal";

export default function RoleCard(params: RoleType){

  const {
    id = 0,
    name,
  } = params;

  return(
    <PrimaryCards key={`card-employee-${id}`}>
      <ColumnContainer container>
        <RowContainer>
          name    : {name}
        </RowContainer>
        <RoleModal modalType="Update" role={params}/>
        <RoleDeleteModal id={id} role={params} />
      </ColumnContainer>
    </PrimaryCards>
  )
}