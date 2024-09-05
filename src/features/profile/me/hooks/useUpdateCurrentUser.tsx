import { ApiError } from "@/api/apiError"
import { updateCurrentUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import useAuthContext from "@/context/authContext"
import { UpdateUser } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { user, logout } = useAuthContext()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdateUser) => updateCurrentUser(data),
    onSuccess: (resData) => {
      if (user?.email.trim() !== resData.email.trim()) logout()

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
