import { ApiError } from "@/api/apiError"
import { updateUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { UpdateUser } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type UpdateUserArgs = {
  userId: string
  user: UpdateUser
}

const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const mutation = useMutation({
    mutationFn: (data: UpdateUserArgs) => updateUser(data.userId, data.user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't update user!",
        description: error.message
      })
    }
  })

  return mutation
}

export default useUpdateUser
