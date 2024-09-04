import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useAuthContext from "@/context/authContext"
import useGetCart from "../hooks/useGetCart"
import useClearCart from "../hooks/useClearCart"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import CartItem from "./CartItem"

const Cart = () => {
  const [open, setOpen] = useState(false)
  const { isLogged } = useAuthContext()
  const { games, cart, error } = useGetCart()
  const { mutate: clearCart } = useClearCart()

  const isEmpty = games.length === 0

  useEffect(() => {
    if (isEmpty) setOpen(false)
  }, [setOpen, isEmpty])

  if (!isLogged || error) return null

  return (
    <div
      className={`fixed ${
        isEmpty && "right-[-100px]"
      } right-10 bottom-10 z-50 transition-all duration-500`}
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="rounded-full h-12 w-12">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent aria-describedby={undefined} className="h-screen flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-primary">Cart</SheetTitle>
          </SheetHeader>
          <ul className="mt-10 flex flex-col gap-5 overflow-y-auto">
            {games.map((game) => (
              <CartItem key={game.id} game={game} />
            ))}
          </ul>
          <div className="mt-auto">
            <p className="text-xl">Total: {cart?.totalPrice.toFixed(2)}€</p>
            <div className="flex justify-between">
              <Link to="/profile/orders">
                <Button
                  className="p-0 text-lg font-bold"
                  variant="link"
                  onClick={() => setOpen(false)}
                >
                  To checkout
                </Button>
              </Link>
              <Button variant="destructive" onClick={() => clearCart()}>
                Clear cart
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Cart
