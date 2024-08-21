import { ApiError } from "@/api/apiError"
import { signUp } from "@/api/authApi"
import { useToast } from "@/components/ui/use-toast"
import useLocalState from "@/hooks/useLocalState"
import { QueryClient, useMutation } from "@tanstack/react-query"

const queryClient = new QueryClient()

const useRegister = () => {
  const [token, setToken] = useLocalState("token", "")
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      setToken(data.token)
      queryClient.setQueryData(["user"], data.user)
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
