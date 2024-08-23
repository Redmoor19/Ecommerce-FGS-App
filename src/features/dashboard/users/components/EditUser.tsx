import UpdateUserForm from "@/features/profile/components/UpdateUserForm"
import { UpdateUser, User } from "@/types/user"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import useUpdateUser from "../hooks/useUpdateUser"
import { useState } from "react"

type EditUserProps = {
  user: User
  children: React.ReactNode
}

const EditUser = ({ user, children }: EditUserProps) => {
  const { mutate } = useUpdateUser()
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
        <UpdateUserForm user={user} submitHandler={handleSubmit} />
      </SheetContent>
    </Sheet>
  )
}

export default EditUser
