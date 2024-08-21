import { CreateUser, Credentials, ResetPassword, UpdatePassword, UserLogin } from "@/types/user"
import api from "."

export const signUp = (data: CreateUser): Promise<UserLogin> => api.post("/auth/signup", data)

export const login = (data: Credentials): Promise<UserLogin> => api.post("/auth/login", data)

export const forgotPassword = (email: string): Promise<void> =>
  api.post("/auth/forgot-password", {
    email
  })

export const resetPassword = (token: string, data: ResetPassword): Promise<UserLogin> =>
  api.post(`/auth/reset-password/${token}`, data)

export const verifyEmail = (token: string) => api.post(`/auth/verify/${token}`)

export const sendVerification = () => api.post(`/auth/verify/send-mail`)

export const updateLoggedUserPassword = (data: UpdatePassword): Promise<UserLogin> =>
  api.post("/users/me/update-password", data)
