import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
import useSendPasswordReset from "../hooks/useSendPasswordReset"
import Loader from "@/components/Loader"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"

const PasswordForgot = () => {
  const [email, setEmail] = useState("")
  const { mutate, error, isPending, isSuccess, isIdle } = useSendPasswordReset()

  function sumbitHandler(e: FormEvent) {
    e.preventDefault()
    mutate(email)
  }

  if (error) return <ErrorDisplay error={error as ApiError} />

  if (isSuccess)
    return (
      <h2 className="text-center py-28 text-primary text-2xl">
        Message sent successfully. Please check your email! <br />
        You may close this page.
      </h2>
    )

  if (isPending) return <Loader />

  if (isIdle)
    return (
      <div className="h-full w-screen flex justify-center items-center">
        <form onSubmit={sumbitHandler} className="flex flex-col gap-7  md:w-1/3">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <Button type="submit">Send password reset email</Button>
        </form>
      </div>
    )

  return null
}

export default PasswordForgot
