import GoBack from "@/components/GoBack"
import OrdersSection from "@/features/profile/orders/components/OrdersSection"
import { Order } from "@/types/order"
import useGetOrdersByUserId from "../hooks/useGetOrdersByUserId"
import Loader from "@/components/Loader"
import ErrorDisplay from "@/components/ErrorDisplay"
import { ApiError } from "@/api/apiError"
import { User } from "@/types/user"

type UserOrdersProps = {
  user: User
}

const UserOrders = ({ user }: UserOrdersProps) => {
  const { data, isLoading, error } = useGetOrdersByUserId(user.id)

  if (isLoading) return <Loader />
  if (error) return <ErrorDisplay error={error as ApiError} />
  if (!data && !isLoading)
    return <ErrorDisplay error={new ApiError("Something went very wrong", 500)} />

  const waiting: Order[] = []
  const paid: Order[] = []
  const rejected: Order[] = []
  const unpaid: Order[] = []

  const displayData = data ? data : []

  displayData.forEach((order) => {
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

  return (
    <div>
      <GoBack />
      <h2 className="text-2xl p-6 text-primary">{user.name} orders</h2>
      <div className="border-t-[1px] border-border">
        <OrdersSection key="waiting" type="waiting" orders={waiting} />
        <OrdersSection key="paid" type="paid" orders={paid} />
        <OrdersSection key="rejected" type="rejected" orders={rejected} />
        <OrdersSection key="unpaid" type="unpaid" orders={unpaid} />
      </div>
    </div>
  )
}

export default UserOrders
