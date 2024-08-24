import { CreateUser } from "@/types/user"

import useRegister from "../hooks/useRegister"
import { useNavigate } from "react-router-dom"
import CreateUserForm from "./CreateUserForm"

const RegisterForm = () => {
  const { mutate, isPending } = useRegister()
  const navigate = useNavigate()

  function onSubmit(values: CreateUser) {
    mutate(values, {
      onSuccess: () => {
        navigate("/")
      }
    })
  }

  return <CreateUserForm handleSubmit={onSubmit} isDisabled={isPending} submitTitle="Sign up" />
}

export default RegisterForm
