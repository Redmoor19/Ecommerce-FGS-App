import { UpdatePassword, UpdateUser } from "@/types/user"
import useUpdateCurrentUser from "../hooks/useUpdateCurrentUser"
import UpdateUserForm from "./UpdateUserForm"
import UpdatePasswordForm from "./UpdatePasswordForm"
import useUpdateCurrentPassword from "../hooks/useUpdateCurrentPassword"
import useAuthContext from "@/context/authContext"
import { Loader } from "lucide-react"
import IsUserVerified from "./IsUserVerified"

const User = () => {
  const { user, isLoading } = useAuthContext()
  const { mutate: mutateUser, isPending: pendingUser } = useUpdateCurrentUser()
  const { mutate: mutatePassword, isPending: pendingPassword } = useUpdateCurrentPassword()

  function updateUserHandler(data: UpdateUser) {
    mutateUser(data)
  }

  function updatePasswordHandler(data: UpdatePassword) {
    mutatePassword(data)
  }

  if (isLoading) return <Loader />
  if (!user) return null
  return (
    <div>
      <IsUserVerified />
      <div className="grid md:grid-cols-2 p-5 gap-5">
        <div>
          <h2 className="py-3 text-2xl text-primary">Update user</h2>
          <UpdateUserForm
            className="p-5 border-muted rounded border-[1px]"
            submitHandler={updateUserHandler}
            isUpdating={pendingUser}
            user={user}
          />
        </div>
        <div>
          <h2 className="py-3 text-2xl text-primary">Update password</h2>
          <UpdatePasswordForm
            className="p-5 border-muted rounded border-[1px]"
            submitHandler={updatePasswordHandler}
            isUpdating={pendingPassword}
          />
        </div>
      </div>
    </div>
  )
}

export default User
