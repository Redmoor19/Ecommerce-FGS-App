import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import useGetUsers from "../hooks/useGetUsers"
import Loader from "@/components/Loader"
import StatusBadge from "./StatusBadge"
import RoleBadge from "./RoleBadge"
import UsersActions from "./UsersActions"
import useUser from "@/features/profile/me/hooks/useUser"
import ErrorDisplay from "@/components/ErrorDisplay"
import UsersControlBar from "./UsersControlBar"
import { useState } from "react"
import { User } from "@/types/user"

const UsersTable = () => {
  const { users, isLoading, error } = useGetUsers()
  const { user: currentUser } = useUser()
  const [searchUsers, setSearchUser] = useState("")

  if (isLoading) return <Loader />
  if (error) return <ErrorDisplay error={error} />

  function searchUsersByEmail(users: User[], searchString: string) {
    return users.filter((user) => user.email.toLowerCase().includes(searchString.toLowerCase()))
  }

  if (users)
    return (
      <section className="flex flex-col gap-3">
        <UsersControlBar users={users} searchUsers={searchUsers} setSearchUser={setSearchUser} />
        <Table className="text-md">
          <TableHeader>
            <TableRow>
              <TableHead className="pl-8 hidden lg:block">Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Role</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchUsersByEmail(users, searchUsers).map((user) => {
              if (user.id != currentUser?.id)
                return (
                  <TableRow key={user.id}>
                    <TableCell className="pl-8  hidden lg:block">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-center">
                      <RoleBadge title={user.role} />
                    </TableCell>
                    <TableCell className="text-center">
                      <StatusBadge title={user.activeStatus} />
                    </TableCell>
                    <TableCell>
                      <UsersActions user={user} />
                    </TableCell>
                  </TableRow>
                )
            })}
          </TableBody>
        </Table>
      </section>
    )

  return null
}

export default UsersTable
