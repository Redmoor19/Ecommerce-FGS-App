import useGetAllCurrentOrders from "../hooks/useGetAllCurrentOrders"
import { Order } from "@/types/order"
import OrdersSection from "./OrdersSection"

const AllOrders = () => {
  const { orders, error, isLoading } = useGetAllCurrentOrders()

  if (!orders) return null

  const filtered = orders.filter((order) => order.paymentStatus !== "UNPAID")
  const waiting: Order[] = []
  const paid: Order[] = []
  const rejected: Order[] = []

  filtered.forEach((order) => {
    const paymentStatus = order.paymentStatus
    switch (paymentStatus) {
      case "WAITING":
        waiting.push(order)
        return
      case "PAID":
        paid.push(order)
        return
      case "REJECTED":
        rejected.push(order)
        return
      default:
        return
    }
  })

  return (
    <div className="border-t-[1px] border-border">
      <OrdersSection key="waiting" type="waiting" orders={waiting} />
      <OrdersSection key="paid" type="paid" orders={paid} />
      <OrdersSection key="rejected" type="rejected" orders={rejected} />
    </div>
  )
}

export default AllOrders
