import { ApiError } from "@/api/apiError"
import { updateCurrentUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { UpdateUser } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdateUser) => updateCurrentUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
      toast({
        title: "Updated"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't update user!",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useUpdateCurrentUser
