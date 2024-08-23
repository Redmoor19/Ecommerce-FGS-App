import { CreateUser } from "@/types/user"

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
import useRegister from "../hooks/useRegister"
import { useNavigate } from "react-router-dom"

const registerSchema: z.ZodType<CreateUser> = z
  .object({
    name: z
      .string()
      .min(1, "Name can't be less, then 1 character")
      .max(30, "That is way to long for a name")
      .trim(),
    email: z.string().email().trim(),
    password: z.string().min(8, "Password should be more then 8 characters"),
    confirmPassword: z.string().min(8, "Password confirm can't be shorter then password")
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "Password confirmation should match the password"
  })

const RegisterForm = () => {
  const { mutate, isPending } = useRegister()
  const navigate = useNavigate()

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  function onSubmit(values: z.infer<typeof registerSchema>) {
    mutate(values, {
      onSuccess: () => {
        navigate("/")
      }
    })
  }

  return (
    <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          disabled={isPending}
          control={registerForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isPending}
          control={registerForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isPending}
          control={registerForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Nobody's gonna know" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isPending}
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password confirm</FormLabel>
              <FormControl>
                <Input type="password" placeholder="They're gonna know" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full">
          Sign up
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
