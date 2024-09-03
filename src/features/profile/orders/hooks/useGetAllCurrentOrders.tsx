import { getCurrentUserOrders } from "@/api/orderApi"
import { useQuery } from "@tanstack/react-query"

const useGetAllCurrentOrders = () => {
  const {
    data: orders,
    isLoading,
    error
  } = useQuery({
    queryFn: getCurrentUserOrders,
    queryKey: ["my-orders"]
  })

  return { orders, isLoading, error }
}

export default useGetAllCurrentOrders
