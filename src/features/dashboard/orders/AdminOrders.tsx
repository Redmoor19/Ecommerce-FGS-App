import { useLocation } from "react-router-dom"
import OrdersStats from "./components/OrdersStats"
import UserOrders from "./components/UserOrders"
import { User } from "@/types/user"

const AdminOrders = () => {
  const location = useLocation()

  const user: User = location.state ? location.state : undefined

  console.log(user)

  if (!user) return <OrdersStats />
  if (user) return <UserOrders user={user} />
  return <></>
}

export default AdminOrders
