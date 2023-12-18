import { createContext, useState } from "react";
import { apiRequest } from "../../../../utils/apiRequest/apiRequest";
import { RoleContextType, RoleType } from "../types/RoleTypes";

export const RoleSettings = createContext<RoleContextType>({
  roles: [],
  setRoles: (val: RoleType[]) => {},
  getRoles: () => {},
});

export default function RoleContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [roles, setRoles] = useState<RoleType[]>([]);

  const getRoles = async () => {
    try {
      const response = await apiRequest.get('/role');
      setRoles(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    roles,
    setRoles: (val: RoleType[]) => console.log(val),
    getRoles,
  };

  return(
    <RoleSettings.Provider value={value}>
      {children}
    </RoleSettings.Provider>
  )
}