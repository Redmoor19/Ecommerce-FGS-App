import { CreateUser } from "@/types/user"
import RegisterForm from "./components/RegisterForm"
import useRegister from "./hooks/useRegister"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const mutation = useRegister()
  const navigate = useNavigate()

  const onSubmit = (data: CreateUser) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate("/")
      }
    })
  }

  return (
    <>
      <RegisterForm handleSubmit={onSubmit} />
    </>
  )
}

export default Register
