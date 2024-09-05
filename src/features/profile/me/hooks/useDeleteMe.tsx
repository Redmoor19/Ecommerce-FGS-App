import { ApiError } from "@/api/apiError"
import { deleteCurrentUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import useAuthContext from "@/context/authContext"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useDeleteMe = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { logout } = useAuthContext()
  const { mutate, isPending } = useMutation({
    mutationFn: deleteCurrentUser,
    onSuccess: () => {
      logout()
      queryClient.invalidateQueries({ queryKey: ["user"] })
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast({
        title: "Deleted successfully!",
        description: "Looking forward for you to come back!"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't delete user!",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useDeleteMe
