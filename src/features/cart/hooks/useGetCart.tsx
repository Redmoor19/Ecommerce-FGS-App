import { ApiError } from "@/api/apiError"
import { getCart } from "@/api/orderApi"
import { Order } from "@/types/order"
import { useQuery } from "@tanstack/react-query"

const useGetCart = () => {
  const {
    data: cart,
    isLoading,
    error
  } = useQuery<Order, ApiError>({
    queryFn: getCart,
    queryKey: ["cart"],
    retry: (failureCount, error) => (error.status === 404 && failureCount <= 3 ? true : false)
  })

  function isInCart(gameId: string) {
    return !!cart?.games.find((game) => game.game.id === gameId)
  }

  const games = cart?.games.map((item) => ({ ...item.game, quantity: item.quantity })) || []

  return { cart, error, isLoading, isInCart, games }
}

export default useGetCart
