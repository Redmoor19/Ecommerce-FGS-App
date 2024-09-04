import { useToast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"

import { forgotPassword } from "@/api/authApi"

const useSendPasswordReset = () => {
  const { toast } = useToast()
  const { mutate, isPending, isSuccess, error, isIdle } = useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to send reset message",
        description: error.message
      })
    }
  })

  return { mutate, isPending, isSuccess, error, isIdle }
}

export default useSendPasswordReset
