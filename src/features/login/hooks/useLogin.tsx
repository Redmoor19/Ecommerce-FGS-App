import { ApiError } from "@/api/apiError"
import { useToast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { login as logInUser } from "@/api/authApi"
import useAuthContext from "@/context/authContext"

const useLogin = () => {
  const { toast } = useToast()
  const { login } = useAuthContext()

  const mutation = useMutation({
    mutationFn: logInUser,
    onSuccess: (data) => {
      login(data)
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description: error.message
      })
    }
  })

  return mutation
}
export default useLogin
