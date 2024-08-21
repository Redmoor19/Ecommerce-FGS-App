import { Credentials } from "@/types/user"
import LoginForm from "./components/LoginForm"
import useLogin from "./hooks/useLogin"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const mutation = useLogin()
  const navigate = useNavigate()

  const onSubmit = (creds: Credentials) => {
    mutation.mutate(creds, {
      onSuccess: () => {
        navigate("/")
      }
    })
  }

  const onForgotPassword = () => {
    navigate("/forgot-password")
  }

  return (
    <>
      <LoginForm submitHandler={onSubmit} forgotPasswordHandler={onForgotPassword} />
    </>
  )
}

export default Login
