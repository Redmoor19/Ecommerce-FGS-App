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
import useUser from "@/features/profile/hooks/useUser"

const UsersTable = () => {
  const { users, isLoading, error } = useGetUsers()
  const { user: currentUser } = useUser()

  if (isLoading) return <Loader />

  if (users)
    return (
      <Table className="text-md">
        <TableHeader>
          <TableRow>
            <TableHead className="pl-8">Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            if (user.id != currentUser?.id)
              return (
                <TableRow key={user.id}>
                  <TableCell className="pl-8">{user.name}</TableCell>
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
    )

  return null
}

export default UsersTable
