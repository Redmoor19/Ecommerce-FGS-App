import { getSingleUser } from "@/api/userApi"
import { useQuery } from "@tanstack/react-query"

const useGetSingleUser = (userId: string) => {
  const {
    data: user,
    isLoading,
    error
  } = useQuery({
    queryFn: () => getSingleUser(userId),
    queryKey: ["singleUser", userId]
  })

  return { user, isLoading, error }
}

export default useGetSingleUser
