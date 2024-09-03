import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import { Order } from "@/types/order"
import usePayOrder from "../hooks/usePayOrder"
import { useState } from "react"
import { Loader } from "lucide-react"
type PayOrderProps = {
  order: Order
}

const Payorder = ({ order }: PayOrderProps) => {
  const [open, setOpen] = useState(false)
  const { mutate, isPending } = usePayOrder()
  function payHandler() {
    mutate({ orderId: order.id, isPaidSuccessfully: true }, { onSuccess: () => setOpen(false) })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="ml-auto">Pay</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Pay for the order</DialogTitle>
        </DialogHeader>
        <p>
          Here should be the form with payment details and information, but we don&apos;t have this
          functionality so just confirm and order. You will recieve some UUID instead of game keys
          anyway 😹😹😹
        </p>
        <p className="mt-3">
          Total to pay:{" "}
          <span className="text-primary font-bold">{order.totalPrice.toFixed(2)}€</span>
        </p>
        <div className="flex justify-end items-center gap-5">
          <Button disabled={isPending} onClick={() => setOpen(false)} variant="outline">
            Cancel
          </Button>
          <Button disabled={isPending} onClick={payHandler}>
            {isPending ? <Loader /> : <span>Confirm</span>}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Payorder
