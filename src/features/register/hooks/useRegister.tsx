import { ApiError } from "@/api/apiError"
import { signUp } from "@/api/authApi"
import { useToast } from "@/components/ui/use-toast"
import useAuthContext from "@/context/authContext"
import { useMutation } from "@tanstack/react-query"

const useRegister = () => {
  const { login } = useAuthContext()
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: signUp,
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

export default useRegister
