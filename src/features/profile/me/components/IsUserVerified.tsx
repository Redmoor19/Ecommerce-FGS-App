import { Button } from "@/components/ui/button"
import useAuthContext from "@/context/authContext"
import useSendVerification from "../hooks/useSendVerification"

const IsUserVerified = () => {
  const { isUnverified } = useAuthContext()
  const { mutate, isPending } = useSendVerification()

  if (isUnverified)
    return (
      <div className="p-6 flex flex-col gap-5 items-start">
        <p className="text-xl">Account is not verified. Check your email for verification link</p>
        <Button disabled={isPending} onClick={() => mutate()}>
          Resend email
        </Button>
      </div>
    )

  return null
}

export default IsUserVerified
