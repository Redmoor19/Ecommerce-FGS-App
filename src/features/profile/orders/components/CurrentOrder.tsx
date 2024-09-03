import useAuthContext from "@/context/authContext"
import useGetCart from "@/features/cart/hooks/useGetCart"
import OrderItem from "./OrderItem"
import { Button } from "@/components/ui/button"
import useCheckout from "../hooks/useCheckout"
import useClearCart from "@/features/cart/hooks/useClearCart"
import { useToast } from "@/components/ui/use-toast"

const CurrentOrder = () => {
  const { cart, games, error, isLoading } = useGetCart()
  const { mutate: checkout, isPending: isCheckingOut } = useCheckout()
  const { mutate: clearCart, isPending: isClearing } = useClearCart()
  const { isUnverified } = useAuthContext()
  const { toast } = useToast()

  function handleCheckout() {
    if (isUnverified) {
      toast({
        variant: "destructive",
        title: "Can't checkout order",
        description: "You have to verify your account"
      })
      return
    }

    checkout()
  }

  const isEmpty = games.length === 0

  return (
    <div>
      <div className={`grid md:grid-cols-2 md:gap-5 `}>
        {isEmpty ? (
          <h2 className="text-center text-2xl py-10 text-primary">
            Your cart is empty 🙀 <br /> Put something there ASAP!
          </h2>
        ) : (
          <ul className="flex flex-col gap-3 p-3">
            {games.map((game) => (
              <OrderItem key={game.id} game={game} />
            ))}
          </ul>
        )}

        {!isEmpty && (
          <div className="flex flex-col gap-5 p-7">
            <h2 className="text-2xl text-primary">Total price: {cart?.totalPrice.toFixed(2)}€</h2>
            <div className="flex gap-5">
              <Button disabled={isCheckingOut} onClick={handleCheckout}>
                Checkout
              </Button>
              <Button disabled={isClearing} onClick={() => clearCart()} variant="destructive">
                Clear cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrentOrder
