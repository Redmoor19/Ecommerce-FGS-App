import { ApiError } from "@/api/apiError"
import { sendVerification } from "@/api/authApi"
import { toast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"

const useSendVerification = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: sendVerification,
    onSuccess: () => {
      toast({
        title: "Email sent",
        description: "Check your mailbox"
      })
    },
    onError: (error: ApiError) => {
      toast({
        variant: "destructive",
        title: "Can't send email",
        description: error.message
      })
    }
  })

  return { mutate, isPending }
}
export default useSendVerification
