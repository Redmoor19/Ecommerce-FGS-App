import { Order } from "@/types/order"
import OrderCard from "./OrderCard"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type OrdersSectionProps = {
  orders: Order[]
  type: string
}

const OrdersSection = ({ orders, type }: OrdersSectionProps) => {
  const [open, setOpen] = useState(() => (type === "waiting" ? true : false))

  function toggleOpen() {
    setOpen((prev) => !prev)
  }

  let title: string

  switch (type) {
    case "waiting":
      title = "Orders to pay"
      break
    case "unpaid":
      title = "Unpaid orders"
      break
    case "paid":
      title = "Paid orders"
      break
    case "rejected":
      title = "Rejected orders"
      break
    default:
      title = ""
      break
  }

  if (!orders.length) return null

  return (
    <section className={`px-5 ${!open && "border-b-[1px] border-border"}`}>
      <button
        onClick={toggleOpen}
        className="flex w-full gap-3 text-primary items-center text-xl py-3"
      >
        {!open && <ChevronDown />}
        {open && <ChevronUp />}
        <h2>{title}</h2>
      </button>
      <ul className={`${!open && "hidden"} flex flex-col gap-3`}>
        {orders.reverse().map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </ul>
    </section>
  )
}

export default OrdersSection
