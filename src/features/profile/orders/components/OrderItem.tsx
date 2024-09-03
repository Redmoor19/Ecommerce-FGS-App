import { Button } from "@/components/ui/button"
import useAddToCart from "@/features/cart/hooks/useAddToCart"
import useRemoveFromCart from "@/features/cart/hooks/useRemoveFromCart"
import { Game } from "@/types/game"

type OrderItemProps = {
  game: Game
}

const OrderItem = ({ game }: OrderItemProps) => {
  const { mutate: mutateAdd, isPending: pendingAdd } = useAddToCart()
  const { mutate: mutateRemove, isPending: pendingRemove } = useRemoveFromCart()

  return (
    <li className="p-3 flex justify-between bg-popover rounded">
      <img
        className="h-28 md:h-40 aspect-square object-cover rounded"
        src={game.thumbnail}
        alt={`${game.name} thumbnail`}
      />
      <div className="flex flex-col gap-2 justify-between items-end">
        <p className="text-xl text-primary">{game.name}</p>
        <div className="flex gap-3 items-center">
          <Button disabled={pendingAdd} onClick={() => mutateAdd(game.id)}>
            Add
          </Button>
          <p className="text-xl">{game.quantity}</p>
          <Button disabled={pendingRemove} onClick={() => mutateRemove(game.id)}>
            Remove
          </Button>
        </div>
        <p className="text-xl">
          Total:{" "}
          <span className="text-primary font-bold">
            {(+game.price * game.quantity).toFixed(2)}€
          </span>
        </p>
      </div>
    </li>
  )
}

export default OrderItem
