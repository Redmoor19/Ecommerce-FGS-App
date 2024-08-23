import { getUsers } from "@/api/userApi"
import { useQuery } from "@tanstack/react-query"

const useGetUsers = () => {
  const {
    data: users,
    isLoading,
    error
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  })

  return { users, isLoading, error }
}

export default useGetUsers
