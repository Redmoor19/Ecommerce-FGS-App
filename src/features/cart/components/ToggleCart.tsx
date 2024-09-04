import useAuthContext from "@/context/authContext"
import useGetCart from "../hooks/useGetCart"
import useAddToCart from "../hooks/useAddToCart"
import useRemoveFromCart from "../hooks/useRemoveFromCart"

import { Button } from "@/components/ui/button"

const ToggleCart = ({ gameId }: { gameId: string }) => {
  const { isLogged } = useAuthContext()
  const { games, isInCart } = useGetCart()
  const { mutate: mutateAdd, isPending: pendingAdd } = useAddToCart()
  const { mutate: mutateRemove, isPending: pendingRemove } = useRemoveFromCart()

  const inCart = isInCart(gameId)
  if (!games) return null
  if (!isLogged) return null

  if (!inCart)
    return (
      <Button disabled={pendingAdd} onClick={() => mutateAdd(gameId)} size="lg">
        Add to cart
      </Button>
    )
  if (inCart)
    return (
      <Button disabled={pendingRemove} onClick={() => mutateRemove(gameId)} size="lg">
        Remove from cart
      </Button>
    )

  return null
}

export default ToggleCart
