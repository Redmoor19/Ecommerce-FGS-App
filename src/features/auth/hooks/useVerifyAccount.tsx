import { useMutation } from "@tanstack/react-query"

import { verifyEmail } from "@/api/authApi"

const useVerifyAccount = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (token: string) => verifyEmail(token)
  })

  return { mutate, isPending }
}

export default useVerifyAccount
