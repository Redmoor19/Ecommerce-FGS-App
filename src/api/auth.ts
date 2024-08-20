import { BaseUser, CreateUser, ResetPassword } from "@/types/user";
import api from ".";

export const signUp = (data: CreateUser) => {
    api.post(
        "/auth/signup",
        data,
    )
}

export const login = (data: BaseUser) => {
    api.post(
        "/auth/login",
        data
    )
}

export const forgotPassword = (email: string) => {
    api.post(
        "/auth/forgot-password",
        {
            email
        }
    )
}

export const resetPassword = (token: string, data: ResetPassword) => {
    api.post(
        `/auth/reset-password/${token}`,
        data
    )
}

export const verifyEmail = (token: string) => {
    api.post(
        `/auth/verify/${token}`
    )
}

export const sendVerification = () => {
    api.post(
        `/auth/verify/send-mail`
    )
}