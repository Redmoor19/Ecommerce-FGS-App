import { Order } from "@/types/order"
import useGetAllOrders from "../hooks/useGetAllOrders"
import OrdersChart from "./OrdersChart"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import OrderCard from "@/features/profile/orders/components/OrderCard"
import Loader from "@/components/Loader"

const OrdersStats = () => {
  const { data, error, isLoading } = useGetAllOrders()
  const [search, setSearch] = useState("")

  if (isLoading) return <Loader />
  if (error) return <ErrorDisplay error={error as ApiError} />
  if (!data) return <ErrorDisplay error={new ApiError("Something went very wrong", 500)} />

  const waiting: Order[] = []
  const paid: Order[] = []
  const rejected: Order[] = []
  const unpaid: Order[] = []

  data.orders.forEach((order) => {
    const paymentStatus = order.paymentStatus
    switch (paymentStatus) {
      case "UNPAID":
        unpaid.push(order)
        return
      case "PAID":
        paid.push(order)
        return
      case "REJECTED":
        rejected.push(order)
        return
      case "WAITING":
        waiting.push(order)
        return
      default:
        return
    }
  })

  const orders = {
    paid: paid.length,
    unpaid: unpaid.length,
    rejected: rejected.length,
    waiting: waiting.length
  }

  const foundOrder = data.orders.filter((order) => order.id === search).at(0)

  return (
    <div>
      <OrdersChart stats={data.stats} orders={orders} totalSum={data.totalSum} />
      <div className="p-6">
        <Input
          placeholder="Find order by id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {foundOrder && (
          <ul className="py-5">
            <OrderCard order={foundOrder} />
          </ul>
        )}
      </div>
    </div>
  )
}

export default OrdersStats
