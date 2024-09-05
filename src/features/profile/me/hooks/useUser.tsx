import { ApiError } from "@/api/apiError"
import { getCurrentUser } from "@/api/userApi"
import { User } from "@/types/user"
import { useQuery } from "@tanstack/react-query"

const useUser = () => {
  const {
    data: user,
    error,
    isLoading,
    refetch
  } = useQuery<User, ApiError>({
    queryFn: getCurrentUser,
    queryKey: ["user"]
  })

  return { user, error, isLoading, role: user?.role, refetch }
}

export default useUser
