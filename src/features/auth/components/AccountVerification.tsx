import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import useAuthContext from "@/context/authContext"
import useVerifyAccount from "../hooks/useVerifyAccount"

import Loader from "@/components/Loader"

const AccountVerification = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const { login, isUnverified, isLogged, isLoading } = useAuthContext()
  const { toast } = useToast()

  const { isPending, mutate } = useVerifyAccount()

  useEffect(() => {
    if (token === undefined || (!isLoading && !isLogged && !isUnverified)) {
      navigate("/login")
      return
    }

    mutate(token, {
      onSuccess: (data) => {
        login(data)
        toast({
          title: "Successfull verification"
        })
        navigate("/profile")
      },
      onError: (error) => {
        navigate("/login")
        toast({
          variant: "destructive",
          title: "Failed to verify account",
          description: error.message
        })
      }
    })
  }, [mutate, token, isUnverified, isLogged, isLoading])

  if (isPending) return <Loader />

  return null
}

export default AccountVerification
