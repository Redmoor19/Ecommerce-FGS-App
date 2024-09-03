import { resetPassword } from "@/api/authApi"
import { useToast } from "@/components/ui/use-toast"
import { ResetPassword } from "@/types/user"
import { useMutation } from "@tanstack/react-query"

const usePasswordReset = () => {
  const { toast } = useToast()
  const { mutate, isPending, isSuccess, error, isIdle } = useMutation({
    mutationFn: (data: { token: string; data: ResetPassword }) =>
      resetPassword(data.token, data.data),
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to reset password",
        description: error.message
      })
    }
  })

  return { mutate, isPending, isSuccess, error, isIdle }
}

export default usePasswordReset
