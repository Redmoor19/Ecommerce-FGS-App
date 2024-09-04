import { UpdateUser, User } from "@/types/user"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import useUpdateUser from "../hooks/useUpdateUser"
import { useState } from "react"
import UpdateUserForm from "@/features/profile/me/components/UpdateUserForm"

type EditUserProps = {
  user: User
  children: React.ReactNode
}

const EditUser = ({ user, children }: EditUserProps) => {
  const { mutate, isPending } = useUpdateUser()
  const [open, setOpen] = useState(false)

  function handleSubmit(updatedUser: UpdateUser) {
    mutate({ userId: user.id, user: updatedUser })
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>
            <span className="text-primary">Edit user</span>
          </SheetTitle>
        </SheetHeader>
        <UpdateUserForm isUpdating={isPending} user={user} submitHandler={handleSubmit} />
      </SheetContent>
    </Sheet>
  )
}

export default EditUser
