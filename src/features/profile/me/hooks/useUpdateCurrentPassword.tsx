import { ApiError } from "@/api/apiError"
import { updateLoggedUserPassword } from "@/api/authApi"
import { useToast } from "@/components/ui/use-toast"
import { UpdatePassword } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useUpdateCurrentPassword = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdatePassword) => updateLoggedUserPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
      toast({
        title: "Updated"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't update password!",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useUpdateCurrentPassword
