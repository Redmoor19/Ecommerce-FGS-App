import { PaymentStatus } from "@/types/order"

type PaymentStatusBageProps = {
  status: PaymentStatus
}

const PaymentStatusBage = ({ status }: PaymentStatusBageProps) => {
  let bgColor
  let textColor

  switch (status) {
    case "PAID":
      bgColor = "bg-green-500/10"
      textColor = "text-green-500"
      break
    case "WAITING":
      bgColor = "bg-yellow-500/10"
      textColor = "text-yellow-500"
      break
    case "REJECTED":
      bgColor = "bg-red-500/10"
      textColor = "text-red-500"
      break
    case "UNPAID":
      bgColor = "bg-purple-500/10"
      textColor = "text-purple-500"
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

export default PaymentStatusBage
