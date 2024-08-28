import { Game } from "@/types/game"
import useAddToCart from "../hooks/useAddToCart"
import useRemoveFromCart from "../hooks/useRemoveFromCart"
import { Button } from "@/components/ui/button"

type CartItemProps = {
  game: Game
}

const CartItem = ({ game }: CartItemProps) => {
  const { mutate: mutateAdd, isPending: pendingAdd } = useAddToCart()
  const { mutate: mutateRemove, isPending: pendingRemove } = useRemoveFromCart()

  return (
    <li className="flex gap-3">
      <img
        className="h-16 aspect-square object-cover rounded-full"
        src={game.thumbnail}
        alt={`${game.name} thumb`}
      />
      <div className="flex flex-col gap-1">
        <p className="text-lg">{game.name}</p>
        <div className="flex gap-3 items-center">
          <Button
            disabled={pendingAdd}
            onClick={() => mutateAdd(game.id)}
            className="rounded-full w-8 h-8"
          >
            +
          </Button>
          <p className="text-lg">{game.quantity}</p>
          <Button
            disabled={pendingRemove}
            onClick={() => mutateRemove(game.id)}
            className="rounded-full w-8 h-8"
          >
            -
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
