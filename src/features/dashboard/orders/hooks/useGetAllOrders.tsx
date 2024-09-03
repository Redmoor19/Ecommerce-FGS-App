import { getAllOrders } from "@/api/orderApi"
import { useQuery } from "@tanstack/react-query"

const useGetAllOrders = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllOrders,
    queryKey: ["orders"]
  })

  return { data, isLoading, error }
}

export default useGetAllOrders
