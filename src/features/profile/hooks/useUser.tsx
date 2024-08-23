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
    queryKey: ["user"],
    retry: (failureCount, error) => (error.status === 404 && failureCount <= 3 ? true : false)
  })

  let isLogged = false

  isLogged = !!user

  return { user, error, isLoading, isLogged, role: user?.role, refetch }
}

export default useUser
