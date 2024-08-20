import { Order, OrderWithUser, PayOrder } from "@/types/order"
import api from "."

export const getAllOrders = (): Promise<Order[]> => api.get("/orders")

export const getAllExtendedOrders = (): Promise<OrderWithUser[]> => api.get("/extended-orders")

export const getOrdersByUserId = (userId: string): Promise<Order[]> =>
  api.get(`orders/user/${userId}`)

export const getOrderById = (orderId: string): Promise<Order> => api.get(`/orders/${orderId}`)

export const getCurrentUserOrders = (): Promise<Order[]> => api.get("/users/me/orders")

export const getCurrentUserOrderById = (orderId: string): Promise<Order> =>
  api.get(`/users/me/orders/${orderId}`)

export const getCart = (): Promise<Order> => api.get("/users/me/orders/current")

export const addGameToCart = (gameId: string): Promise<Order> =>
  api.post(`users/me/orders/current/game/${gameId}`)

export const deleGameFromCart = (gameId: string): Promise<Order> =>
  api.delete(`users/me/orders/current/game/${gameId}`)

export const clearCart = (): Promise<Order> => api.delete("users/me/orders/current")

export const checkoutOrder = (): Promise<Order> => api.post("users/me/orders/current/checkout")

export const payForOrder = (data: PayOrder): Promise<Order> =>
  api.post("users/me/orders/current/pay", data)
