import { useQuery } from "@tanstack/react-query"
import useAuthContext from "@/context/authContext"

import { getCart } from "@/api/orderApi"
import { ApiError } from "@/api/apiError"
import { Order } from "@/types/order"

const useGetCart = () => {
  const { user } = useAuthContext()

  const {
    data: cart,
    isLoading,
    error,
    refetch
  } = useQuery<Order, ApiError>({
    queryFn: getCart,
    queryKey: ["cart"]
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
