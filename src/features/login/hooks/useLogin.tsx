import { ApiError } from "@/api/apiError"
import { login } from "@/api/authApi"
import { useToast } from "@/components/ui/use-toast"
import useLocalState from "@/hooks/useLocalState"
import { QueryClient, useMutation } from "@tanstack/react-query"

const queryClient = new QueryClient()

const useLogin = () => {
  const [token, setToken] = useLocalState("token", "")
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: login,
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
export default useLogin
