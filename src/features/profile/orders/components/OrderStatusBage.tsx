import { OrderStatus } from "@/types/order"

type OrderStatusBageProps = {
  status: OrderStatus
}

const OrderStatusBage = ({ status }: OrderStatusBageProps) => {
  let bgColor
  let textColor

  switch (status) {
    case "APPROVED":
      bgColor = "bg-green-500/10"
      textColor = "text-green-500"
      break
    case "PROCESSING":
      bgColor = "bg-yellow-500/10"
      textColor = "text-yellow-500"
      break
    case "DECLINED":
      bgColor = "bg-red-500/10"
      textColor = "text-red-500"
      break
    case "DELIVERED":
      bgColor = "bg-blue-500/10"
      textColor = "text-blue-500"
      break
    default:
      break
  }

  return (
    <div
      className={`flex items-center gap-1 rounded-full ${bgColor} px-3 py-1 text-xs font-medium ${textColor}`}
    >
      <span>{status}</span>
    </div>
  )
}

export default OrderStatusBage
