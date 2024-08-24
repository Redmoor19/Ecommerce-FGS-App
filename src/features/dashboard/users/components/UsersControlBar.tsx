import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User } from "@/types/user"
import CreateUser from "./CreateUser"

type UsersControlBarProps = {
  users?: User[]
  searchUsers: string
  setSearchUser: (query: string) => void
}

const UsersControlBar = ({ users, searchUsers, setSearchUser }: UsersControlBarProps) => {
  return (
    <div className="px-5 py-3 flex gap-7">
      <Input
        placeholder="Search user by email"
        disabled={!users || users.length === 0}
        type="text"
        value={searchUsers}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <CreateUser>
        <Button>Create user</Button>
      </CreateUser>
    </div>
  )
}

export default UsersControlBar
