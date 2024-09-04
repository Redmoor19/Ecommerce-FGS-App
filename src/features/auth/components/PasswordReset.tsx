import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import useAuthContext from "@/context/authContext"
import usePasswordReset from "../hooks/usePasswordReset"

import PasswordResetForm from "./PasswordResetForm"
import Loader from "@/components/Loader"
import ErrorDisplay from "@/components/ErrorDisplay"

import { ApiError } from "@/api/apiError"
import { ResetPassword } from "@/types/user"

const PasswordReset = () => {
  const { token } = useParams()
  const { toast } = useToast()
  const { login, isLogged, isLoading } = useAuthContext()
  const navigate = useNavigate()
  const { mutate, isPending, isIdle, error } = usePasswordReset()

  useEffect(() => {
    if (token === undefined || (isLogged && !isLoading)) {
      toast({
        variant: "destructive",
        title: token === undefined ? "Incorrect token" : "You are currently logged in logged in"
      })
      navigate("/profile")
      return
    }
  }, [token])

  function submitHandler(data: ResetPassword) {
    if (token === undefined) return
    mutate(
      { token, data },
      {
        onSuccess(data) {
          login(data)
          navigate("/profile")
        }
      }
    )
  }
  if (isPending) return <Loader />

  if (error) return <ErrorDisplay error={error as ApiError} />

  if (isIdle)
    return (
      <div className="h-full w-screen flex justify-center items-center">
        <PasswordResetForm handleSubmit={submitHandler} />
      </div>
    )

  return null
}

export default PasswordReset
