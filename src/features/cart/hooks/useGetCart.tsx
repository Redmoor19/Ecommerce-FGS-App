import { ApiError } from "@/api/apiError"
import { getCart } from "@/api/orderApi"
import useAuthContext from "@/context/authContext"
import { Order } from "@/types/order"
import { useQuery } from "@tanstack/react-query"

const useGetCart = () => {
  const { user } = useAuthContext()

  const {
    data: cart,
    isLoading,
    error,
    refetch
  } = useQuery<Order, ApiError>({
    queryFn: getCart,
    queryKey: ["cart"],
    retry: (failureCount, error) => (error.status === 404 && failureCount <= 3 ? true : false)
  })

  if (cart && user && cart.userId !== user.id) {
    refetch()
  }

  function isInCart(gameId: string) {
    return !!cart?.games.find((game) => game.game.id === gameId)
  }

  const games = cart?.games.map((item) => ({ ...item.game, quantity: item.quantity })) || []

  return { cart, error, isLoading, isInCart, games }
}

export default useGetCart
