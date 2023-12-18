export type RoleType = {
  id?: number,
  name: string
}

export type RoleContextType = {
  roles: RoleType[],
  setRoles: (val: RoleType[]) => void,
  getRoles: () => void,
}