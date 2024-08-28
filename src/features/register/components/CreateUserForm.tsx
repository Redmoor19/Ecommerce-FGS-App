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
import { CreateUser } from "@/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type CreateUserFormProps = {
  isDisabled?: boolean
  submitTitle: string
  handleSubmit: (values: CreateUser) => void
  className?: string
}

const createUserSchema: z.ZodType<CreateUser> = z
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

const CreateUserForm = ({
  handleSubmit,
  submitTitle,
  isDisabled,
  className
}: CreateUserFormProps) => {
  const createUserForm = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  function onSubmit(values: z.infer<typeof createUserSchema>) {
    handleSubmit(values)
  }

  return (
    <Form {...createUserForm}>
      <form onSubmit={createUserForm.handleSubmit(onSubmit)} className={`${className} space-y-5`}>
        <FormField
          disabled={isDisabled}
          control={createUserForm.control}
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
          disabled={isDisabled}
          control={createUserForm.control}
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
          disabled={isDisabled}
          control={createUserForm.control}
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
          disabled={isDisabled}
          control={createUserForm.control}
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
        <Button disabled={isDisabled} type="submit" className="w-full">
          {submitTitle}
        </Button>
      </form>
    </Form>
  )
}

export default CreateUserForm
