import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import useAuthContext from "@/context/authContext"
import { ShoppingCartIcon } from "lucide-react"
import useGetCart from "../hooks/useGetCart"
import CartItem from "./CartItem"
import { useEffect, useState } from "react"

const Cart = () => {
  const [open, setOpen] = useState(false)
  const { isLogged } = useAuthContext()
  const { games, cart, error } = useGetCart()

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
            <p className="text-xl text-primary">Total: {cart?.totalPrice.toFixed(2)}€</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Cart
