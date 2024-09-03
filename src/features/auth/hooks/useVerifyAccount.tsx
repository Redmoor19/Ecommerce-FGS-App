import { verifyEmail } from "@/api/authApi"
import { useMutation } from "@tanstack/react-query"

const useVerifyAccount = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (token: string) => verifyEmail(token)
  })

  return { mutate, isPending }
}

export default useVerifyAccount
