import { getOrdersByUserId } from "@/api/orderApi"
import { useQuery } from "@tanstack/react-query"

const useGetOrdersByUserId = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getOrdersByUserId(userId),
    queryKey: ["orders", userId]
  })

  return { data, isLoading, error }
}

export default useGetOrdersByUserId
