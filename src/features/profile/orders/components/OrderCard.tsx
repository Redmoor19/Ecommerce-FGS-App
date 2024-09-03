import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import OrderStatusBage from "./OrderStatusBage"
import PaymentStatusBage from "./PaymentStatusBage"
import { Order } from "@/types/order"
import Payorder from "./PayOrder"
import useAuthContext from "@/context/authContext"

type OrderCardProps = {
  order: Order
}

const OrderCard = ({ order }: OrderCardProps) => {
  const { user } = useAuthContext()
  return (
    <li>
      <Card className="bg-background">
        <CardHeader className="flex flex-row items-start px-6 py-4">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">Order#</span>
              <span>{order.id}</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <OrderStatusBage status={order.status} />
            <PaymentStatusBage status={order.paymentStatus} />
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium">{order.totalPrice.toFixed(2)}€</span>
            </div>
            {order.games.length === 0 ? (
              <p className="font-medium">No games ordered</p>
            ) : (
              <div className="grid gap-2">
                <p className="font-medium">Games Ordered</p>
                <ul className="grid gap-2">
                  {order.games.map(({ game, quantity }) => (
                    <li key={game.id} className="flex items-center justify-between">
                      <span>
                        {game.name} ({quantity})
                      </span>
                      <span>{game.price}€</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {order.paymentStatus === "PAID" && (
            <p className="mt-2 text-muted-foreground">
              Paid at: {new Date(order.updatedAt).toDateString()}
            </p>
          )}
          {order.paymentStatus === "REJECTED" && (
            <p className="mt-2 text-muted-foreground">
              Rejected at: {new Date(order.updatedAt).toDateString()}
            </p>
          )}
        </CardContent>
        {order.paymentStatus === "WAITING" && user?.id === order.userId && (
          <CardFooter className="border-t-[1px] border-border py-2">
            <Payorder order={order} />
          </CardFooter>
        )}
      </Card>
    </li>
  )
}

export default OrderCard
