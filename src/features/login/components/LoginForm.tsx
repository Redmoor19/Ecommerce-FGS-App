import { Credentials } from "@/types/user"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useLogin from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"

const loginSchema: z.ZodType<Credentials> = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8, "Password should be more then 8 characters")
})

const LoginForm = () => {
  const { mutate, isPending } = useLogin()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    mutate(values, {
      onSuccess: () => {
        navigate("/")
      }
    })
  }

  function forgotPasswordHandler() {
    navigate("/forgot-password")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isPending}
                  placeholder="Nobody's gonna know"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="w-full" type="submit">
          Sign in
        </Button>
        <Button
          disabled={isPending}
          onClick={forgotPasswordHandler}
          variant="link"
          className="w-full"
        >
          Forgot password
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
