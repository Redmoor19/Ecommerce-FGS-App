import { ApiError } from "@/api/apiError"
import { createUser } from "@/api/userApi"
import { useToast } from "@/components/ui/use-toast"
import { CreateUser } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (data: CreateUser) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"], exact: true })
      toast({
        variant: "default",
        title: "Success",
        description: "User created"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Faild to create user",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}

export default useCreateUser
