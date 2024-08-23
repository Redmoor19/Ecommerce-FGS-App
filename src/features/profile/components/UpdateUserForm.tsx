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
import { UpdateUser, User } from "@/types/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const userSchema: z.ZodType<UpdateUser> = z.object({
  name: z
    .string()
    .min(1, "Name can't be less, then 1 character")
    .max(30, "That is way to long for a name")
    .trim(),
  email: z.string().email().trim(),
  birthDate: z.date().nullable(),
  address: z.string().nullable(),
  phone: z.string().nullable()
})

type UpdateUserFormProps = {
  user: User
  submitHandler: (updateUser: UpdateUser) => void
}

const UpdateUserForm = ({ user, submitHandler }: UpdateUserFormProps) => {
  const updateForm = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      birthDate: user.birthDate ? new Date(user.birthDate) : null,
      address: user.address ? user.address : "",
      phone: user.phone ? user.phone : ""
    }
  })

  function onSubmit(values: z.infer<typeof userSchema>) {
    const updatedValues = {
      ...values,
      address: values.address != "" ? values.address : null,
      phone: values.phone != "" ? values.phone : null
    }
    submitHandler(updatedValues)
  }

  return (
    <Form {...updateForm}>
      <form onSubmit={updateForm.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={updateForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder={user.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updateForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={user.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updateForm.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                  value={
                    field.value instanceof Date
                      ? field.value.toISOString().split("T")[0]
                      : field.value || ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updateForm.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder={user.address ?? "Street 2 C 2, 13415, City"}
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={updateForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder={user.phone ?? "+358 418 17 14"}
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update</Button>
      </form>
    </Form>
  )
}

export default UpdateUserForm
