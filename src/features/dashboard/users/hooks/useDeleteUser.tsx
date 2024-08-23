import { ApiError } from "@/api/apiError"
import { deleteUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type DeleteUserArgs = {
  userId: string
}

const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const mutation = useMutation({
    mutationFn: (data: DeleteUserArgs) => deleteUser(data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't delete user!",
        description: error.message
      })
    }
  })

  return mutation
}

export default useDeleteUser
