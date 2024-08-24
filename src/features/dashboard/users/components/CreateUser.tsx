import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import CreateUserForm from "@/features/register/components/CreateUserForm"
import useCreateUser from "../hooks/useCreateUser"
import { CreateUser as CreateUserType } from "@/types/user"
import { useState } from "react"

type CreateUserProps = {
  children: React.ReactNode
}

const CreateUser = ({ children }: CreateUserProps) => {
  const { mutate, isPending } = useCreateUser()
  const [open, setOpen] = useState(false)

  function onSubmit(values: CreateUserType) {
    mutate(values)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>
            <span className="text-primary">Create user</span>
          </SheetTitle>
        </SheetHeader>
        <div className="py-7">
          <CreateUserForm handleSubmit={onSubmit} isDisabled={isPending} submitTitle="Create" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreateUser
