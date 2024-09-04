import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import { User, UserRoleType } from "@/types/user"
import {
  Eye,
  GripHorizontal,
  LockKeyhole,
  Pencil,
  ReceiptEuroIcon,
  UserCog,
  UserMinus,
  UserPlus,
  UserRound
} from "lucide-react"
import useUpdateUserRole from "../hooks/useUpdateUserRole"
import useDeleteUser from "../hooks/useDeleteUser"
import useActivateUser from "../hooks/useActivateUser"
import ViewUser from "./ViewUser"
import EditUser from "./EditUser"
import { Link } from "react-router-dom"

type UsersDropdownProps = {
  user: User
}

const UsersActions = ({ user }: UsersDropdownProps) => {
  const { mutate: updateRole } = useUpdateUserRole()
  const { mutate: deleteUser } = useDeleteUser()
  const { mutate: activateUser } = useActivateUser()

  function handleUpdateRole(userId: string, role: UserRoleType) {
    updateRole({ userId, role })
  }

  function handleDeleteUser(userId: string) {
    deleteUser({ userId })
  }

  function handleActivateUser(userId: string) {
    activateUser({ userId })
  }

  return (
    <div className="flex items-center justify-end gap-3 text-muted-foreground">
      <Link to="/dashboard/orders" state={user}>
        <ReceiptEuroIcon className="cursor-pointer hover:text-primary" size={25} />
      </Link>
      <ViewUser user={user}>
        <Eye className="cursor-pointer hover:text-primary" size={25} />
      </ViewUser>
      <EditUser user={user}>
        <Pencil className="cursor-pointer hover:text-primary" size={25} />
      </EditUser>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <GripHorizontal className="cursor-pointer hover:text-primary" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-12">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserCog className="mr-2" size={20} />
                <span>Status</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {user.role === "USER" ? (
                    <DropdownMenuItem onClick={() => handleUpdateRole(user.id, "ADMIN")}>
                      <LockKeyhole className="mr-2 h-4 w-4" />
                      <span>Admin</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => handleUpdateRole(user.id, "USER")}>
                      <UserRound className="mr-2 h-4 w-4" />
                      <span>User</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            {user.activeStatus !== "NOT_ACTIVE" ? (
              <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
                <UserMinus className="mr-2" size={20} />
                <span>Remove</span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={() => handleActivateUser(user.id)}>
                <UserPlus className="mr-2" size={20} />
                <span>Activate</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UsersActions
