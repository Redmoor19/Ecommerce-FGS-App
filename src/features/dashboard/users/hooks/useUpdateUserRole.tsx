import { ApiError } from "@/api/apiError"
import { updateUserRole } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { UserRoleType } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export type UpdateRoleArgs = {
  userId: string
  role: UserRoleType
}

const useUpdateUserRole = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const mutation = useMutation({
    mutationFn: (data: UpdateRoleArgs) => updateUserRole(data.userId, data.role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't update role!",
        description: error.message
      })
    }
  })

  return mutation
}

export default useUpdateUserRole
