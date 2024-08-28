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
  const { games } = useGetCart()

  const isEmpty = games.length === 0
  const gamesInCart = !isEmpty ? games.reduce((acc: number, curr) => acc + curr.quantity, 0) : 0

  useEffect(() => {
    if (gamesInCart === 0) setOpen(false)
  }, [gamesInCart, setOpen])

  if (!isLogged) return null
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
        <SheetContent aria-describedby={undefined}>
          <SheetHeader>
            <SheetTitle className="text-primary">Cart</SheetTitle>
          </SheetHeader>
          <ul className="mt-10 flex flex-col gap-5">
            {games.map((game) => (
              <CartItem key={game.id} game={game} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Cart
