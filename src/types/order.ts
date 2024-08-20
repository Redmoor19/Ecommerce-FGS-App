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
  unpaid: "UNPAID"
} as const

export type Order = {
  id: string
  userId: string
  totalPrice: number
  createdAt: number
  status: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]
  paymentStatus: (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]
  games: Game[]
}

export type OrderWithUser = Omit<Order, "userId"> & {
  user: User
}

export type GameOrder = {
  game: Game
  quantity: number
}
