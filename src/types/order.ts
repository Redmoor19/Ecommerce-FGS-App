import { Game } from "./game"
import { User } from "./user"

const ORDER_STATUS = {
  processing: "PROCESSING",
  approved: "APPROVED",
  declined: "DECLINED",
  delivered: "DELIVERED"
} as const

const PAYMENT_STATUS = {
  waiting: "WAITING",
  paid: "PAID",
  unpaid: "UNPAID",
  rejected: "REJECTED"
} as const

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]

export type PaymentStatus = (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]

export type Order = {
  id: string
  userId: string
  totalPrice: number
  createdAt: number
  updatedAt: number
  status: OrderStatus
  paymentStatus: PaymentStatus
  games: GameOrder[]
}

export type OrderWithUser = Omit<Order, "userId"> & {
  user: User
}

export type GameOrder = {
  game: Game
  quantity: number
}

export type PayOrder = {
  orderId: string
  isPaidSuccessfully: boolean
}

export type OrdersWithStats = {
  orders: Order[]
  stats: { [key: string]: number }
  totalSum: number
}
