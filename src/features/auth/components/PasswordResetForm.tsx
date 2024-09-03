import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ResetPassword } from "@/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type PasswordResetFormProps = {
  handleSubmit: (data: ResetPassword) => void
}

const passwordResetSchema: z.ZodType<ResetPassword> = z
  .object({
    password: z.string().min(8, "Password should be more then 8 characters"),
    confirmPassword: z.string().min(8, "Password confirm can't be shorter then password")
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "Password confirmation should match the password",
    path: ["confirmPassword"]
  })

const PasswordResetForm = ({ handleSubmit }: PasswordResetFormProps) => {
  const createPaswordResetForm = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  })

  function onSubmit(values: z.infer<typeof passwordResetSchema>) {
    handleSubmit(values)
  }

  return (
    <Form {...createPaswordResetForm}>
      <form
        onSubmit={createPaswordResetForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-7  md:w-1/3"
      >
        <FormField
          control={createPaswordResetForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="New password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createPaswordResetForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirm</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm new password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Reset Password</Button>
      </form>
    </Form>
  )
}

export default PasswordResetForm
