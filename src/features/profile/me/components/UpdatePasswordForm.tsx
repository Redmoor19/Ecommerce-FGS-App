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
import { UpdatePassword } from "@/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type UpdatePasswordFormProps = {
  submitHandler: (values: UpdatePassword) => void
  isUpdating: boolean
  className?: string
}

const passwordSchema: z.ZodType<UpdatePassword> = z
  .object({
    password: z.string().trim().min(8, "Password can't be less then 8 characters"),
    newPassword: z.string().trim().min(8, "Password should be more then 8 characters"),
    newPasswordConfirm: z.string().trim().min(8, "Password confirm can't be shorter then password")
  })
  .refine((fields) => fields.newPassword === fields.newPasswordConfirm, {
    message: "Password confirmation should match the password",
    path: ["newPasswordConfirm"]
  })

const UpdatePasswordForm = ({ submitHandler, isUpdating, className }: UpdatePasswordFormProps) => {
  const updatePasswordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: ""
    }
  })

  function onSubmit(values: z.infer<typeof passwordSchema>) {
    submitHandler(values)
  }

  return (
    <Form {...updatePasswordForm}>
      <form
        onSubmit={updatePasswordForm.handleSubmit(onSubmit)}
        className={`${className} space-y-5`}
      >
        <FormField
          control={updatePasswordForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old password</FormLabel>
              <FormControl>
                <Input disabled={isUpdating} type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updatePasswordForm.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
              <FormControl>
                <Input disabled={isUpdating} type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updatePasswordForm.control}
          name="newPasswordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm new password</FormLabel>
              <FormControl>
                <Input disabled={isUpdating} type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isUpdating} type="submit">
          Update
        </Button>
      </form>
    </Form>
  )
}

export default UpdatePasswordForm
