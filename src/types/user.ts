export const ROLE = {
  admin: "ADMIN",
  user: "USER"
} as const

export const USER_STATUS = {
  active: "ACTIVE",
  unverified: "UNVERIFIED",
  notActive: "NOT_ACTIVE"
} as const

export type UserRoleType = (typeof ROLE)[keyof typeof ROLE]

export type UserStatusType = (typeof USER_STATUS)[keyof typeof USER_STATUS]

export type BaseUser = {
  name: string
  email: string
}

export type User = BaseUser & {
  id: string
  role: UserRoleType
  birthDate: Date | null
  activeStatus: UserStatusType
  address: string | null
  phone: string | null
}

export type CreateUser = BaseUser & {
  password: string
  comfirmPassword: string
}

export type UpdateUser = Pick<User, "name" | "email" | "birthDate" | "address" | "phone">

export type UpdatePassword = {
  password: string
  newPassword: string
  newPasswordConfirm: string
}

export type ResetPassword = Pick<CreateUser, "password" | "comfirmPassword">

export type UserLogin = {
  token: string
  user: User
}

export type UpdateRole = {
  role: UserRoleType
}
