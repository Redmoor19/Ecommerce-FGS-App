/* eslint-disable no-case-declarations */
import { UserRoleType } from "@/types/user"

export type RoleControl = {
  [key: string]: {
    view: PagePermission[]
    action: ResoursePermission[]
  }
}

type Page = "HOME" | "DASHBOARD" | "PROFILE" | "CART"
type Resourse = "GAME" | "ORDER" | "USER"
type Action = "CREATE" | "READ" | "UPDATE" | "DELETE"

export type ResoursePermission = `${Resourse}:${Action}`
export type PagePermission = `${Page}:VIEW`

export type PermissionCategory = keyof RoleControl[UserRoleType]

export const RBAC_ROLES: RoleControl = {
  USER: {
    view: ["HOME:VIEW", "PROFILE:VIEW", "CART:VIEW"],
    action: [
      "GAME:READ",
      "ORDER:READ",
      "ORDER:UPDATE",
      "ORDER:DELETE",
      "USER:UPDATE",
      "USER:DELETE"
    ]
  },
  ADMIN: {
    view: ["HOME:VIEW", "PROFILE:VIEW", "DASHBOARD:VIEW", "CART:VIEW"],
    action: [
      "GAME:CREATE",
      "GAME:DELETE",
      "GAME:READ",
      "GAME:UPDATE",
      "ORDER:READ",
      "ORDER:UPDATE",
      "ORDER:DELETE",
      "USER:CREATE",
      "USER:UPDATE",
      "USER:READ",
      "USER:DELETE"
    ]
  }
}

const checkPermisson = (
  role: UserRoleType,
  permission: ResoursePermission | PagePermission,
  permissionCategory: PermissionCategory
): boolean => {
  const permissions = RBAC_ROLES[role]
  if (!permissions) {
    return false
  }

  switch (permissionCategory) {
    case "view": {
      const viewPermissions = permissions.view
      if (!viewPermissions || viewPermissions.length === 0) return false
      if (!viewPermissions.includes(permission as PagePermission)) return false
      return true
    }
    case "action": {
      const actionPermissions = permissions.action
      if (!actionPermissions || actionPermissions.length === 0) return false
      if (!actionPermissions.includes(permission as ResoursePermission)) return false
      return true
    }
    default:
      return false
  }
}

export default checkPermisson
