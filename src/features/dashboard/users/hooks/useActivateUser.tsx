import { ApiError } from "@/api/apiError"
import { activateUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type ActivateUserArgs = {
  userId: string
}

const useActivateUser = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const mutation = useMutation({
    mutationFn: (data: ActivateUserArgs) => activateUser(data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't activate user!",
        description: error.message
      })
    }
  })

  return mutation
}

export default useActivateUser
